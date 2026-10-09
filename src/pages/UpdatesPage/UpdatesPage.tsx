import { UPDATES } from '@/data/updates';
import UpdateList from '@/components/UpdateList';
import InfoPageLayout from '@/components/InfoPageLayout';

export default function UpdatesPage() {
  return (
    <InfoPageLayout
      kicker="Updates"
      title="产品更新日志"
      description="记录每一件作品真实发生的改进。带「示例」标签的条目为开发预览，正式上线前会替换为真实记录。"
    >
      <div>
        {UPDATES.length > 0 ? (
          <UpdateList items={UPDATES} showLink={false} />
        ) : (
          <div className="border border-dashed border-border p-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            No updates yet · 暂无更新记录
          </div>
        )}
        <p className="mt-4 text-[12px] leading-relaxed text-muted-foreground">
          说明：本站当前为开发版本，上表条目为明确标注的开发示例，不构成真实已发生的更新、销量或购买记录。
        </p>
      </div>
    </InfoPageLayout>
  );
}
