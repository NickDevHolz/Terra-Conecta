import {
  Bell,
  BookOpen,
  BotMessageSquare,
  Camera,
  HandHelping,
  Home,
  Image,
  Mic,
  Store,
  Truck,
  Volume2,
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FloatingOriaButton } from '../../oria/components/FloatingOriaButton';
import { OriaAssistantModal } from '../../oria/components/OriaAssistantModal';
import type { OriaTab } from '../../oria/oria.types';
import { CustomToast } from '../components/CustomToast';
import { FloatingAgroBackground } from '../components/FloatingAgroBackground';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HelpSection } from '../components/HelpSection';
import { MainActionsSection } from '../components/MainActionsSection';
import { MarketConnectionSection } from '../components/MarketConnectionSection';
import { OriaBanner } from '../components/OriaBanner';
import { OriaSection } from '../components/OriaSection';
import { PageLoader } from '../components/PageLoader';
import { ProductiveDataSection } from '../components/ProductiveDataSection';
import { ProductiveJourneySection } from '../components/ProductiveJourneySection';
import { QuickActionsSection } from '../components/QuickActionsSection';
import { TopNav } from '../components/TopNav';
import { WelcomeSection } from '../components/WelcomeSection';
import type { MainAction, NavItem, QuickAction, ToastState } from '../home.types';

export function HomePage() {
  const navigate = useNavigate();

  const [toast, setToast] = useState<ToastState>({
    visible: false,
    title: '',
    message: '',
    tone: 'info',
  });

  const [isLoading, setIsLoading] = useState(true);
  const [oriaModalOpen, setOriaModalOpen] = useState(false);
  const [oriaTab, setOriaTab] = useState<OriaTab>('texto');

  const showToast = useCallback((payload: Omit<ToastState, 'visible'>) => {
    setToast({ visible: true, ...payload });
  }, []);

  const hideToast = useCallback(() => {
    setToast((current) => ({ ...current, visible: false }));
  }, []);

  useEffect(() => {
    if (!toast.visible) return;

    const timeout = window.setTimeout(hideToast, 3200);
    return () => window.clearTimeout(timeout);
  }, [toast.visible, hideToast]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  const openOria = useCallback((tab: OriaTab = 'texto') => {
    setOriaTab(tab);
    setOriaModalOpen(true);
  }, []);

  const handleUnavailableNavigation = useCallback(
    (label: string) => {
      showToast({
        tone: 'info',
        title: `${label} em breve`,
        message: 'Toque em Ori\u00e1 para receber ajuda agora.',
      });
    },
    [showToast],
  );

  const mainActions: MainAction[] = [
    {
      icon: Mic,
      title: 'Falar com Ori\u00e1',
      subtitle: 'Ajuda por voz',
      helper: 'Toque para falar',
      iconBg: 'linear-gradient(135deg, #4F8FD4 0%, #77B4EB 100%)',
      iconColor: '#FFFFFF',
      borderColor: 'rgba(79, 143, 212, 0.26)',
      shadowColor: '0 18px 36px rgba(79, 143, 212, 0.18)',
      onClick: () => openOria('voz'),
    },
    {
      icon: Camera,
      title: 'Mostrar planta',
      subtitle: 'Ajuda por foto',
      helper: 'Abrir c\u00e2mera',
      iconBg: 'linear-gradient(135deg, #6C8E2A 0%, #8EB843 100%)',
      iconColor: '#FFFFFF',
      borderColor: 'rgba(108, 142, 42, 0.28)',
      shadowColor: '0 18px 36px rgba(108, 142, 42, 0.18)',
      onClick: () => navigate('/plants'),
    },
    {
      icon: Store,
      title: 'Vender melhor',
      subtitle: 'Ajuda no mercado',
      helper: 'Preparar venda',
      iconBg: 'linear-gradient(135deg, #C88919 0%, #E8BD61 100%)',
      iconColor: '#FFFFFF',
      borderColor: 'rgba(223, 169, 74, 0.28)',
      shadowColor: '0 18px 36px rgba(223, 169, 74, 0.16)',
      onClick: () =>
        showToast({
          tone: 'info',
          title: 'Venda',
          message: 'Ori\u00e1 pode ajudar a organizar a produ\u00e7\u00e3o.',
        }),
    },
  ];

  const quickActions: QuickAction[] = [
    {
      icon: Bell,
      label: 'Avisos',
      iconBg: 'rgba(223, 169, 74, 0.18)',
      iconColor: '#C88919',
      borderColor: 'rgba(223, 169, 74, 0.28)',
      hoverGlow: '0 16px 28px rgba(223, 169, 74, 0.14)',
      onClick: () => navigate('/dashboard'),
    },
    {
      icon: Volume2,
      label: 'Ouvir',
      iconBg: 'rgba(86, 151, 217, 0.18)',
      iconColor: '#2F7BC9',
      borderColor: 'rgba(86, 151, 217, 0.28)',
      hoverGlow: '0 16px 28px rgba(86, 151, 217, 0.14)',
      onClick: () => navigate('/oria'),
    },
    {
      icon: BookOpen,
      label: 'Produção',
      iconBg: 'rgba(108, 142, 42, 0.18)',
      iconColor: '#5F7D26',
      borderColor: 'rgba(108, 142, 42, 0.28)',
      hoverGlow: '0 16px 28px rgba(108, 142, 42, 0.14)',
      onClick: () => navigate('/production/planejar'),
    },
    {
      icon: Truck,
      label: 'Entrega',
      iconBg: 'rgba(201, 120, 84, 0.16)',
      iconColor: '#AF6545',
      borderColor: 'rgba(201, 120, 84, 0.28)',
      hoverGlow: '0 16px 28px rgba(201, 120, 84, 0.14)',
      onClick: () => navigate('/market/entregar'),
    },
  ];

  const topNavItems: NavItem[] = [
    { icon: Home, label: 'In\u00edcio', path: '/' },
    { icon: Image, label: 'Painel', path: '/dashboard' },
    { icon: BotMessageSquare, label: 'Ori\u00e1', path: '/oria' },
    { icon: Camera, label: 'Planta', path: '/plants' },
    { icon: HandHelping, label: 'Ajuda' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F6EFE3_0%,#EFE3D3_100%)] text-stone-800">
      <FloatingAgroBackground />
      <PageLoader visible={isLoading} />
      <CustomToast toast={toast} onClose={hideToast} />
      <FloatingOriaButton onOpen={() => openOria('voz')} />

      <OriaAssistantModal
        open={oriaModalOpen}
        activeTab={oriaTab}
        onChangeTab={setOriaTab}
        onClose={() => setOriaModalOpen(false)}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[27rem] flex-col px-5 py-4 sm:px-6">
        <Header />

        <TopNav
          items={topNavItems}
          onUnavailablePress={handleUnavailableNavigation}
        />

        <main className="mt-4 flex flex-1 flex-col gap-[1.125rem]">
          <WelcomeSection />
          <MainActionsSection actions={mainActions} />
          <OriaBanner onPrimaryAction={() => openOria('voz')} />
          <ProductiveJourneySection />
          <ProductiveDataSection />
          <MarketConnectionSection />
          <OriaSection
            onVoicePress={() => openOria('voz')}
            onListenPress={() => openOria('voz')}
            onCameraPress={() => navigate('/plants')}
          />
          <QuickActionsSection actions={quickActions} />
          <HelpSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}