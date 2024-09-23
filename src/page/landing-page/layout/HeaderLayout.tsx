import React from "react";

export default function HeaderLayout({children}: {children: React.ReactNode}) {
    return(
        <main className="w-full h-svh">
            {children}
        </main>
    );
}