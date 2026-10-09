import SectionHeading from '@/components/SectionHeading';

export default function PhilosophySection() {
  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            index="02"
            kickerEn="Studio Note"
            title="不是一个商城，而是创作的另一种延伸。"
          />
          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/85">
            <p>
              我会在这里发布自己创造的工具、资源和数字作品。
              有些作品可以免费使用，有些需要付费获得完整权限，还有一些仍在不断调整。
            </p>
            <p>
              我不追求一次性把所有东西做完，而是希望通过持续的尝试，让每一个作品慢慢变得更好。
              每一件上架的东西，都经过了真实的制作与验证——不存在的功能、不确定的权益，不会出现在这里。
            </p>
            <p className="font-serif text-[15px] italic text-muted-foreground">
              想法不落地就不算数。跑通的、粗糙的作品，好过完美的草稿。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
