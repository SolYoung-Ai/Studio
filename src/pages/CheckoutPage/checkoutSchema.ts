import { z } from 'zod';

/**
 * 结算表单校验规则。
 * 注意：schema 不使用 .default()/.transform()，避免 zod input/output 类型分裂。
 */
export const checkoutSchema = z
  .object({
    nickname: z.string().trim().min(1, '请填写称呼或昵称').max(30, '称呼过长'),
    contactType: z.enum(['wechat', 'email']),
    contact: z.string().trim().min(1, '请填写联系方式'),
  })
  .superRefine((value, ctx) => {
    if (value.contactType === 'email') {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.contact);
      if (!emailOk) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['contact'],
          message: '请填写有效的邮箱地址',
        });
      }
    } else if (value.contact.length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['contact'],
        message: '请填写有效的微信号',
      });
    }
  });

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
