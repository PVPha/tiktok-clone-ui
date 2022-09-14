import Header from "~/layouts/components/Header";

function UploadLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}
export default UploadLayout;
