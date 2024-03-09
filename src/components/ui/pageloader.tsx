import { Spinner } from "./spinner"

export const PageLoader = () => {
  return (
    <div className="w-full h-full min-h-full relative">
        <Spinner className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
    </div>
  )
}
