import Image from 'next/image';

const ProfileIcon = () => {
  return (
    <>
      <Image
        src="/img/profile.png"
        width={200}
        height={200}
        layout="intrinsic"
      />
    </>
  );
};

export default ProfileIcon;
