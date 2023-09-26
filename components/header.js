import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import logo from '../public/images/logo/logo-1.png';
import Navbar from './navbar';

export default function Header() {
    const router = useRouter();
    const mostrarDiv = router.query.mostrarDiv === 'true';
    const [isVisible, setIsVisible] = useState(true);
    const handleOcultar = () => {
        setIsVisible(false);
    };

    return (
        <>
            <div className="grid grid-cols-3 shadow-lg shadow-gray-500/5">
                <div className="m-1">
                    <Navbar></Navbar>
                </div>
                <div className="flex m-1 justify-center">
                    <Link href="/"><Image className="w-28" loading='lazy' src={logo} alt="logo de banco BCIB" /></Link>
                </div>
                <div className="m-1">
                    <div className="buttonMenu justify-end">
                        <Link href="signup"><button className="btnInicioSesion">Iniciar <br /> Sesion</button></Link>
                        <Link href="signup"><button className="btnRegistrarse">Hacete <br /> Cliente</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}