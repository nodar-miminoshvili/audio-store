import { getUserProfileData } from '@/lib/actions';
import ProfileButton from './ProfileButton';

const ProfileButtonWrapper = async () => {
  const user = await getUserProfileData();

  return (
    <div className="hidden items-center sm:flex">
      <ProfileButton avatar={user.picture} />
    </div>
  );
};

export default ProfileButtonWrapper;
