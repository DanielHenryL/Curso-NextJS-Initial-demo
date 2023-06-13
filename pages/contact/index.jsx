import Link from 'next/link'
import { MainLayout } from '@/components/Layouts/MainLayout'

export default function ContactPage()  {
  return (
    <MainLayout title={'Daniel Contact'} content={'Contact Page'}>
      <h1>Contact Page</h1>

      <h1 className={'description'}>
        Ir a <Link href={'/'}>Home</Link>
      </h1>
      <p className={'main'}>
        Get started by editing{' '};
        <code >pages/contact.tsx</code>
      </p>
    </MainLayout>
  )
}
