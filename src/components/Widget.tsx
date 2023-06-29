import { Rocket, X, Check } from 'lucide-react'

export function Widget() {
  return (
    <div className="w-[448px] overflow-hidden rounded">
      {/* Header */}
      <div className="flex items-center justify-between bg-zinc-200 px-6 py-4 dark:bg-zinc-800">
        <span className="font-bold">Notificações</span>
        <button className="text-xs font-bold uppercase text-violet-500 hover:text-violet-400">
          Marcar todas como vistas
        </button>
      </div>

      {/* Recent Section */}
      <div>
        <div className="bg-zinc-300 px-5 py-2 text-sm font-medium text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <div className="flex items-start gap-6 bg-zinc-200 px-8 py-4 dark:bg-zinc-900">
            <Rocket className="mt-3 h-6 w-6 text-violet-500" />
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-200">
                Você recebeu um convite para fazer parte da empresa Rocketseat.
              </p>
              <div className="flex items-center gap-1 text-xxs text-zinc-500 dark:text-zinc-400">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-6 bg-zinc-200 px-8 py-4 dark:bg-zinc-900">
            <Rocket className="mt-3 h-6 w-6 text-violet-500" />
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-200">
                Você recebeu um convite para fazer parte da empresa Rocketseat.
              </p>
              <div className="flex items-center gap-1 text-xxs text-zinc-400">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>
            <div className="flex gap-2 self-center">
              <button className="flex h-8 w-8 items-center justify-center rounded bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                <X className="h-4 w-4 text-zinc-50" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded bg-violet-500 hover:bg-violet-600">
                <Check className="h-4 w-4 text-zinc-50" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Old Section */}
      <div>
        <div className="bg-zinc-300 px-5 py-2 text-sm font-medium text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
          Antigas
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <div className="flex items-start gap-6 bg-zinc-200 px-8 py-4 dark:bg-zinc-900">
            <Rocket className="mt-3 h-6 w-6 text-violet-500" />
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-200">
                Você recebeu um convite para fazer parte da empresa Rocketseat.
              </p>
              <div className="flex items-center gap-1 text-xxs text-zinc-500 dark:text-zinc-400">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-6 bg-zinc-200 px-8 py-4 dark:bg-zinc-900">
            <Rocket className="mt-3 h-6 w-6 text-violet-500" />
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-200">
                Você recebeu um convite para fazer parte da empresa Rocketseat.
              </p>
              <div className="flex items-center gap-1 text-xxs text-zinc-400">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>
            <div className="flex gap-2 self-center">
              <button className="flex h-8 w-8 items-center justify-center rounded bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                <X className="h-4 w-4 text-zinc-50" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded bg-violet-500 hover:bg-violet-600">
                <Check className="h-4 w-4 text-zinc-50" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
