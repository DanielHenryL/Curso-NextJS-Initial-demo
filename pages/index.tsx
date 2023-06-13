import Link from 'next/link'
import {MainLayout} from '../components/Layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout title={'daniel lagunas'} content={'Home Page'}>
      <h1>Home Page</h1>
          <h1 className={'description'}>
            Ir a <Link href={'/about'}>About</Link>
          </h1>
          <p className={'main'}>
            Get started by editing{' '};
            <code>pages/home.tsx</code>
        </p>
    </MainLayout>
  )
}
