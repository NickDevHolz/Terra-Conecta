import { Loader2, MessageCircleHeart, Volume2 } from 'lucide-react';

import type { ChatMessage } from '../oria.types';

export function OriaChat({
  messages,
  isSubmitting,
}: {
  messages: ChatMessage[];
  isSubmitting: boolean;
}) {
  return (
    <div className="space-y-3">
      {messages.map((message) => {
        const assistant = message.role === 'assistant';

        return (
          <div
            key={message.id}
            className={`flex ${assistant ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`flex max-w-[88%] items-start gap-2 rounded-[22px] px-4 py-3 text-[0.92rem] font-semibold leading-6 shadow-[0_8px_18px_rgba(91,64,37,0.04)] ${
                assistant
                  ? 'bg-[linear-gradient(180deg,#FFFFFF,#F7FBFF)] text-[#4B4A48]'
                  : 'bg-[linear-gradient(180deg,#4F8FD4,#5EA2E4)] text-white'
              }`}
            >
              {assistant ? (
                <MessageCircleHeart className="mt-0.5 h-5 w-5 shrink-0 text-[#4F8FD4]" strokeWidth={2.7} />
              ) : null}

              <span>{message.content}</span>

              {assistant ? (
                <Volume2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4F8FD4]" strokeWidth={2.7} />
              ) : null}
            </div>
          </div>
        );
      })}

      {isSubmitting ? (
        <div className="flex justify-start">
          <div className="flex items-center gap-2 rounded-[22px] bg-[linear-gradient(180deg,#FFFFFF,#F7FBFF)] px-4 py-3 text-[0.9rem] font-bold text-[#5F5C59] shadow-[0_8px_18px_rgba(91,64,37,0.04)]">
            <Loader2 className="h-5 w-5 animate-spin text-[#4F8FD4]" strokeWidth={2.7} />
            Oriá pensando
          </div>
        </div>
      ) : null}
    </div>
  );
}