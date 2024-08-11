import Image from 'next/image';

const ProfileButton = ({ avatar }: { avatar: string }) => {
  return (
    <button>
      <Image
        src={avatar}
        width={45}
        height={45}
        alt="avatar"
        className="rounded-full block outline outline-[2px] outline-[#ffffff80] hover:outline-[var(--accent-clr)] transition-colors"
      />
    </button>
  );
};

export default ProfileButton;
