import Image from 'next/image'
import Link from 'next/link'

interface LoginButtonProps {
  href: string
  src: string
  alt: string
  children: React.ReactNode
}

const LoginButton = ({ href, src, alt, children }: LoginButtonProps) => {
  return (
    <Link href={href}>
      <div className="flex px-6 py-5  gap-5 items-center justify-start bg-gray-600 rounded-lg w-96 h-16">
        <Image src={src} width={32} height={32} quality={100} alt={alt} />
        <h2>{children}</h2>
      </div>
    </Link>
  )
}

export default async function Login() {
  return (
    <main className="flex flex-col sm:flex-row gap-56 items-center justify-center max-w-full max-h-full min-h-screen p-5">
      <Image
        src="/login-image.png"
        alt=""
        width={598}
        height={912}
        quality={100}
        className="max-w-full h-auto"
      />

      <section className="flex flex-col gap-10">
        <header className="flex flex-col gap-1">
          <h1 className="text-gray-100 text-2xl">Boas Vindas!</h1>
          <p className="text-gray-200 text-base">
            Faça seu login ou acesse como visitante.
          </p>
        </header>

        <div className="flex flex-col gap-3">
          <LoginButton
            href="/auth/google"
            src="/google-icon.png"
            alt="Ícone do Google"
          >
            Entrar com Google
          </LoginButton>

          <LoginButton
            href="/auth/github"
            src="/github-icon.png"
            alt="Ícone do Google"
          >
            Entrar com GitHub
          </LoginButton>

          <LoginButton
            href="/visitor"
            src="/rocket-launch.png"
            alt="Ícone do Google"
          >
            Acessar como visitante
          </LoginButton>
        </div>
      </section>
    </main>
  )
}
