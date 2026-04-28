import {
  Camera,
  MessageCircleHeart,
  Mic,
  Sparkles,
  X,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import { ORIA_INITIAL_MESSAGE } from '../oria.constants';
import type { ChatMessage, OriaTab, PermissionStateType } from '../oria.types';
import { buildId, simulateOriaReply } from '../oria.utils';
import { OriaChat } from './OriaChat';
import { OriaImageInput } from './OriaImageInput';
import { OriaLogo } from './OriaLogo';
import { OriaTextInput } from './OriaTextInput';
import { OriaVoiceInput } from './OriaVoiceInput';

type Props = {
  open: boolean;
  activeTab: OriaTab;
  onChangeTab: (tab: OriaTab) => void;
  onClose: () => void;
};

export function OriaAssistantModal({
  open,
  activeTab,
  onChangeTab,
  onClose,
}: Props) {
  const [textMessage, setTextMessage] = useState('');
  const [selectedImageName, setSelectedImageName] = useState('');
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [voiceRecording, setVoiceRecording] = useState(false);
  const [voicePermission, setVoicePermission] =
    useState<PermissionStateType>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: buildId(),
      role: 'assistant',
      content: ORIA_INITIAL_MESSAGE,
    },
  ]);

  const mediaStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (!open) {
      setVoiceRecording(false);

      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
      }
    }
  }, [open]);

  useEffect(() => {
    return () => {
      if (selectedImageUrl) {
        URL.revokeObjectURL(selectedImageUrl);
      }
    };
  }, [selectedImageUrl]);

  if (!open) return null;

  const addAssistantReply = async (payload: {
    tab: OriaTab;
    text?: string;
    imageName?: string;
    voiceUsed?: boolean;
  }) => {
    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 700));

    setMessages((current) => [
      ...current,
      {
        id: buildId(),
        role: 'assistant',
        content: simulateOriaReply(payload),
      },
    ]);

    setIsSubmitting(false);
  };

  const handleSubmitText = async () => {
    const value = textMessage.trim();
    if (!value) return;

    setMessages((current) => [
      ...current,
      {
        id: buildId(),
        role: 'user',
        content: value,
      },
    ]);

    setTextMessage('');
    await addAssistantReply({ tab: 'texto', text: value });
  };

  const handleAskMicrophonePermission = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setVoicePermission('unsupported');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      setVoicePermission('granted');
      setVoiceRecording(true);
    } catch {
      setVoicePermission('denied');
      setVoiceRecording(false);
    }
  };

  const handleStopVoiceSimulation = async () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    setVoiceRecording(false);

    setMessages((current) => [
      ...current,
      {
        id: buildId(),
        role: 'user',
        content: 'Mensagem de voz',
      },
    ]);

    await addAssistantReply({ tab: 'voz', voiceUsed: true });
  };

  const handleImageSelected = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (selectedImageUrl) {
      URL.revokeObjectURL(selectedImageUrl);
    }

    const objectUrl = URL.createObjectURL(file);
    setSelectedImageName(file.name);
    setSelectedImageUrl(objectUrl);

    setMessages((current) => [
      ...current,
      {
        id: buildId(),
        role: 'user',
        content: 'Imagem enviada',
      },
    ]);

    await addAssistantReply({ tab: 'imagem', imageName: file.name });
  };

  const tabs = [
    { key: 'texto', label: 'Texto', icon: MessageCircleHeart },
    { key: 'voz', label: 'Voz', icon: Mic },
    { key: 'imagem', label: 'Foto', icon: Camera },
  ] as const;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(35,30,27,0.30)] p-3 backdrop-blur-[3px] sm:items-center sm:p-5">
      <div className="relative flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-[32px] border border-white/85 bg-[linear-gradient(180deg,rgba(250,252,255,0.98),rgba(255,250,244,0.96))] shadow-[0_24px_60px_rgba(50,40,32,0.24)]">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#CFE7FB]/70 blur-3xl" />
        <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-[#E5F3DF]/70 blur-3xl" />

        <div className="relative border-b border-white/80 px-4 pb-4 pt-4">
          <div className="flex items-start gap-3">
            <OriaLogo />

            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[0.66rem] font-black uppercase tracking-[0.12em] text-[#4F8FD4]">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
                Oriá
              </div>

              <h3 className="mt-3 text-[1.35rem] font-black leading-[1.02] tracking-tight text-[#1F1A17]">
                Como posso ajudar?
              </h3>
            </div>

            <button
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#8F7F73] shadow-[0_8px_16px_rgba(91,64,37,0.06)]"
              aria-label="Fechar Oriá"
            >
              <X className="h-5 w-5" strokeWidth={2.8} />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {tabs.map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.key;

              return (
                <button
                  key={item.key}
                  onClick={() => onChangeTab(item.key)}
                  className={`rounded-[20px] border px-3 py-3 text-center transition-all duration-200 ${
                    active
                      ? 'border-[#9CCAF2] bg-[#EAF5FF] shadow-[0_10px_18px_rgba(79,143,212,0.10)]'
                      : 'border-white/70 bg-white/75'
                  }`}
                  aria-label={item.label}
                >
                  <Icon
                    className={`mx-auto h-7 w-7 ${
                      active ? 'text-[#4F8FD4]' : 'text-[#8A7D73]'
                    }`}
                    strokeWidth={2.7}
                  />
                  <div
                    className={`mt-2 text-[0.8rem] font-black ${
                      active ? 'text-[#2B5F94]' : 'text-[#645C56]'
                    }`}
                  >
                    {item.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative flex-1 overflow-y-auto px-4 pb-4 pt-3">
          <OriaChat messages={messages} isSubmitting={isSubmitting} />

          <div className="mt-4">
            {activeTab === 'texto' ? (
              <OriaTextInput
                value={textMessage}
                disabled={isSubmitting}
                onChange={setTextMessage}
                onSubmit={handleSubmitText}
              />
            ) : null}

            {activeTab === 'voz' ? (
              <OriaVoiceInput
                voiceRecording={voiceRecording}
                voicePermission={voicePermission}
                onStart={handleAskMicrophonePermission}
                onStop={handleStopVoiceSimulation}
              />
            ) : null}

            {activeTab === 'imagem' ? (
              <OriaImageInput
                selectedImageName={selectedImageName}
                selectedImageUrl={selectedImageUrl}
                onImageSelected={handleImageSelected}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}