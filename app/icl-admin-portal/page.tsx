import type { Metadata } from "next";
import AdminConsole from "@/components/admin/AdminConsole";

export const metadata: Metadata = {
  title: "Admin Portal",
  robots: { index: false, follow: false },
};

export default function AdminPortalPage() {
  return (
    <section className="section-spacing min-h-[70vh] bg-islamic-50 !pt-28 md:!pt-32">
      <div className="mx-auto max-w-5xl px-4">
        <AdminConsole />
      </div>
    </section>
  );
}