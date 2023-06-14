import Link from 'next/link'
import { MainLayout } from '@/components/Layouts/MainLayout'

export default function PricingPage()  {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>

      <h1 className={'description'}>
        Ir a <Link href={'/'}>Home</Link>
      </h1>
      <p className={'main'}>
        Get started by editing{' '};
        <code >pages/pricing/index.jsx</code>
      </p>
    </MainLayout>
  )
}