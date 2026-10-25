import { UPDATES } from '@/data/updates';
import UpdateList from '@/components/UpdateList';
import InfoPageLayout from '@/components/InfoPageLayout';

export default function UpdatesPage() {
  return (
    <InfoPageLayout
      kicker="Updates"
      title="更新日志"
      description="只记录 SolYoung Studio 本站真实发生的改动。"
    >
      <UpdateList items={UPDATES} showLink={false} />
    </InfoPageLayout>
  );
}
