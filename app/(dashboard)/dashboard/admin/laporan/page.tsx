export const metadata = { title: 'Laporan' };

import Breadcrumb from '@/components/ui/breadcrumb';

export default function Page() {
  return (
    <div className="p-6">
      <Breadcrumb items={[{ title: 'Dashboard', href: '/dashboard/admin/overview' }, { title: 'Laporan' }]} />
      <h1 className="font-extrabold text-2xl text-mono-100">Laporan</h1>
      <p className="text-mono-300 mt-2">Grafik dan laporan export — UI placeholder.</p>
    </div>
  );
}
