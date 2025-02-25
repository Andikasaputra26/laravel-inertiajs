import Navbar from "@/Components/Navbar";
export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/* <Sidebar /> */}

            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Navbar />

                {/* Halaman yang akan berubah */}
                <main className="flex-1">{children}</main>

                {/* Footer */}
                {/* <Footer /> */}
            </div>
        </div>
    );
}
