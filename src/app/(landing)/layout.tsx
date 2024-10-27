import MainLayout from '@/components/Feature/Layouts/ MainLayout';

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
