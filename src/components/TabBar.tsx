import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Tabbar,
  TabbarLink,
} from 'konsta/react';

export function TabBar() {
  const [activeTab, setActiveTab] = useState(0);
    let navigate = useNavigate();
    const handleHomeTab = () => {
      setActiveTab(0);
      navigate("/");
    };
    const handleSearchTab = () => {
      setActiveTab(1);
      navigate("/search");
    };
    const handleProfileTab = () => {
      setActiveTab(2);
      navigate("/profile");
    };
  return (
        <Tabbar
          labels={true}
          icons={false}
          className="left-0 bottom-0 fixed"
        >
          <TabbarLink
            active={activeTab === 0}
            onClick={handleHomeTab}
            // icon={
            //   isTabbarIcons && (
            //     <Icon
            //       ios={<EnvelopeFill className="w-7 h-7" />}
            //       material={<MdEmail className="w-6 h-6" />}
            //     />
            //   )
            // }
            label={'Home'}
          />
          <TabbarLink
            active={activeTab === 1}
            onClick={handleSearchTab}
            // icon={
            //   isTabbarIcons && (
            //     <Icon
            //       ios={<Calendar className="w-7 h-7" />}
            //       material={<MdToday className="w-6 h-6" />}
            //     />
            //   )
            // }
            label={'Search'}
          />
          <TabbarLink
            active={activeTab === 2}
            onClick={handleProfileTab}
            // icon={
            //   isTabbarIcons && (
            //     <Icon
            //       ios={<CloudUploadFill className="w-7 h-7" />}
            //       material={<MdFileUpload className="w-6 h-6" />}
            //     />
            //   )
            // }
            label={'Profile'}
          />
        </Tabbar>
  );
}