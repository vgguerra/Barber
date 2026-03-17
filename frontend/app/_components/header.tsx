import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
    return (
        <Card>
            <CardContent className="justify-between flex flex-row items-center p-5">
                <Image alt='FSW Barber' src="/logo.png" height={18} width={120}></Image>
                <Button variant="outline" size="icon">
                    <MenuIcon></MenuIcon>
                </Button>
            </CardContent>
        </Card>
    );
};

export default Header;