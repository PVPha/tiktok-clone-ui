import Header from "~/pages/Layouts/components/Header";

function UploadLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}
export default UploadLayout;
