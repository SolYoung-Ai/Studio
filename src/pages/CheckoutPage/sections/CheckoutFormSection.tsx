import type { UseFormReturn } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import type { CheckoutFormValues } from '../checkoutSchema';

interface CheckoutFormSectionProps {
  form: UseFormReturn<CheckoutFormValues>;
  onValidSubmit: () => void;
}

export default function CheckoutFormSection({ form, onValidSubmit }: CheckoutFormSectionProps) {
  return (
    <section aria-labelledby="checkout-form-title">
      <h2
        id="checkout-form-title"
        className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        联系信息 · Contact
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onValidSubmit)} noValidate className="space-y-5">
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>称呼或昵称</FormLabel>
                <FormControl>
                  <Input placeholder="怎么称呼你" autoComplete="nickname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>联系方式类型</FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="wechat" id="contact-wechat" />
                      <Label htmlFor="contact-wechat" className="font-normal">
                        微信
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email" className="font-normal">
                        邮箱
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {form.watch('contactType') === 'email' ? '邮箱地址' : '微信号'}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={form.watch('contactType') === 'email' ? 'name@example.com' : '你的微信号'}
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">确认信息，查看付款方式</Button>
        </form>
      </Form>

      <p className="mt-4 text-[12px] leading-relaxed text-muted-foreground">
        联系方式仅用于订单的人工核验与权益交付，不会发送给任何未经配置的第三方。
      </p>
    </section>
  );
}
