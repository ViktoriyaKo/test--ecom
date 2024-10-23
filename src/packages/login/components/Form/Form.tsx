'use client';
import { ROUTERS } from '@/constants/routers';
import styles from './Form.module.scss';
import { Input } from '@/ui/atoms';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const Form = () => {
  const initialForm = { name: '' };
  const router = useRouter();

  const methods = useForm({
    defaultValues: initialForm,
    mode: 'onSubmit',
  });

  const onSubmit = async (data: { name: string }, href: string) => {
    const { name } = data;
    router.push(href);
    localStorage.setItem('userName', name);
    // methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.container}>
        <h1 className={styles.title}>Начать</h1>
        <Input
          name={'name'}
          className={styles.input}
          placeholder="Ваше имя"
          label={'Напишите ваше имя'}
          type={'text'}
          id={'email'}
          rules={{ required: 'Введите ваше имя' }}
        />
        <div className={styles.links}>
          {ROUTERS.map((router) => {
            const { href, caption } = router;
            return (
              <button
                type="button"
                className={styles.link}
                key={caption}
                onClick={methods.handleSubmit((data) => onSubmit(data, href))}
              >
                Открыть {caption}
              </button>
            );
          })}
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
