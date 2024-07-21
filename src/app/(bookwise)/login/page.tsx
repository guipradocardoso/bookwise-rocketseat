import Image from 'next/image'
import Link from 'next/link'

export default async function Login() {
  return (
    <div className="flex max-h-[952px] flex-row gap-56 items-center justify-start bg-gray-700">
      <Image
        src="/login-image.png"
        alt=""
        width={598}
        height={912}
        quality={100}
      />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-100 text-2xl">Boas Vindas!</h1>
          <p className="text-gray-200 text-base">
            Faça seu login ou acesse como visitante.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="">
            <div className="flex px-6 py-5  gap-5 items-center justify-start bg-gray-600 rounded-lg w-96 h-16">
              <Image
                src="/google-icon.png"
                width={32}
                height={32}
                alt=""
                quality={100}
              />
              <h2 className="text-lg font-semibold">Entrar com Google</h2>
            </div>
          </Link>

          <Link href="">
            <div className="flex px-6 py-5 gap-5 items-center justify-start bg-gray-600 rounded-lg w-96 h-16">
              <Image
                src="/github-icon.png"
                width={32}
                height={32}
                alt=""
                quality={100}
              />
              <h2 className="text-lg font-semibold">Entrar com GitHub</h2>
            </div>
          </Link>

          <Link href="">
            <div className="flex px-6 py-5 gap-5 items-center justify-start bg-gray-600 rounded-lg w-96 h-16">
              <Image
                src="/rocket-lauch.png"
                width={32}
                height={32}
                alt=""
                quality={100}
              />
              <h2 className="text-lg font-semibold">Acessar como visitante</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
