import Image from 'next/image';

const ProfileIcon = () => {
  return (
    <>
      <Image
        src="/img/profile.png"
        alt="プロフィール画像"
        width={200}
        height={200}
        layout="intrinsic"
      />
    </>
  );
};

export default ProfileIcon;
