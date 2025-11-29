import { SidebarTrigger } from '@/components/ui/sidebar';
import { RoleSwitcher } from '@/components/layout/role-switcher';
import { UserNav } from '@/components/layout/user-nav';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:h-16 sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1">
        {/* We can add breadcrumbs or page title here later */}
      </div>
      <RoleSwitcher />
      <UserNav />
    </header>
  );
}
