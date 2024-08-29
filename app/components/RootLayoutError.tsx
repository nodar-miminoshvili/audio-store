import { PiMaskSadFill as SadFaceIcon } from 'react-icons/pi';

const RootLayoutError = () => {
  const homeURL = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <main
      className="w-dvw h-dvh flex flex-col justify-center items-center gap-2.5  bg-[var(--base-background)]
      font-medium text-xl text-[var(--text-temporary-faded)]"
    >
      <SadFaceIcon className="text-5xl text-[var(--accent-clr)]" />
      <span className="">Oops! Something Went Wrong</span>

      <a
        href={homeURL}
        className="px-2.5 py-1.5 rounded-md border border-[var(--accent-clr)] w-fit
                        transition-colors hover:bg-[var(--accent-clr)] hover:text-[var(--text-temporary)]"
      >
        Reload Page
      </a>
    </main>
  );
};

export default RootLayoutError;
