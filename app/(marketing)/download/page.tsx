import { DownloadModal } from "@/components/modals/download-modal";

const DownloadPage = () => {
  return (
    <div className="dark:bg-[#313338] h-screen flex flex-col items-center justify-center p-4">
      <DownloadModal />
    </div>
  );
};

export default DownloadPage;