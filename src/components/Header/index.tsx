import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
    AppBar,
    Box,
    Toolbar,
    Grid,
    IconButton,
    Drawer,
    List,
    ListItem,
    Divider,
    Slide,
    Fade,
    useScrollTrigger,
    Collapse,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

import titleLogo from "../../assets/images/title-logo.png";
import mallIcon from "../../assets/icons/icon-mall.png";
import menuIcon from "../../assets/icons/icon-title-menu.png";
import closeIcon from "../../assets/icons/card-close-menu.png";
import KeyboardArrowUpIcon from "../../assets/icons/icon-arrow-title-down.png";
import KeyboardArrowDownIcon from "../../assets/icons/icon-arrow-title-up.png";
import ScrollTopButton from "../ScrollTopButton";

import styles from "./Header.module.scss";

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [drawer, setDrawer] = useState(false);
    const [open, setOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleMyPage = () => {
        if (open) {
            setOpen(!open);
            setScrollY(0);
        } else {
            setOpen(!open);
            setScrollY(window.scrollY);
        }
    };

    const handleMobileMyPage = () => {
        setMobileOpen(!mobileOpen);
    };

    const toggleDrawer = (open: boolean) => {
        setDrawer(open);
    };

    interface Props {
        children: React.ReactElement;
    }

    const HideOnScroll = (props: Props) => {
        const { children } = props;
        const trigger = useScrollTrigger({
            threshold: scrollY,
        });

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide >
        );
    }

    const ScrollTop = (props: Props) => {
        const { children } = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true,
        });

        const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
            const anchor = (
                (event.target as HTMLDivElement).ownerDocument || document
            ).querySelector('#back-to-top-anchor');

            if (anchor) {
                anchor.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        };

        return (
            <Fade in={trigger}>
                <Box
                    onClick={handleClick}
                    role="presentation"
                    sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1 }}
                >
                    {children}
                </Box>
            </Fade>
        );
    }

    const Logo = () => {
        return (
            <Link to="/">
                <Grid container spacing={2} alignItems="center" alignContent="center">
                    <Grid item>
                        <HashLink to="/#back-to-top-anchor">
                            <img className={styles.logo} src={titleLogo} alt="Logo" />
                        </HashLink>
                    </Grid>
                </Grid>
            </Link>
        );
    };

    const SectionDesktop = () => {
        return (
            <Box sx={{ display: { md: "block", xs: "none" }, marginRight: 3 }}>
                <div className={styles.desktopContainer}>
                    <HashLink className={styles.desktopItem} to="/#back-to-top-anchor">
                        Main
                    </HashLink>
                    <HashLink className={styles.desktopItem} to="/#gallery">
                        Gallery
                    </HashLink>
                    <HashLink className={styles.desktopItem} to="/#worldview">
                        Worldview
                    </HashLink>
                    <HashLink className={styles.desktopItem} to="/#roadmap">
                        Roadmap
                    </HashLink>
                    <Link className={styles.desktopItem} to="/minting">
                        Minting
                    </Link>
                </div>
            </Box>
        );
    };

    const SectionMobile = () => {
        return (
            <Box sx={{ display: { md: "none", xs: "block" } }}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <IconButton
                            onClick={() => {
                                toggleDrawer(true);
                            }}
                        >
                            <img src={menuIcon} alt="menu" height={10} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        );
    };

    const MobileDrawer = () => {
        return (
            <Drawer
                anchor="right"
                open={drawer}
                onClose={() => {
                    toggleDrawer(false);
                }}
                sx={{ backgroundColor: "#fefef2", marginLeft: "20px" }}
            >
                <List sx={{ width: "100vw", height: "100vh", backgroundColor: "#fefef2" }}>
                    <ListItem sx={{ padding: "10px 20px" }}>
                        <div className={styles.mobileDrawer}>
                            <img src={titleLogo} alt="text-logo" />
                            <img src={closeIcon} alt="card-close-menu" onClick={() => {
                                toggleDrawer(false);
                            }} />
                        </div>
                    </ListItem>
                    <Divider sx={{ borderColor: "#000", borderBottomWidth: "2px", marginLeft: "20px", marginRight: "20px" }} />
                    <HashLink style={{ textDecoration: "none" }} to="/" onClick={() => { toggleDrawer(false); }}>
                        <div className={styles.mobileItem}>Main</div>
                    </HashLink>
                    <HashLink style={{ textDecoration: "none" }} to="/#gallery" onClick={() => { toggleDrawer(false); }}>
                        <div className={styles.mobileItem}>Gallery</div>
                    </HashLink>
                    <HashLink style={{ textDecoration: "none" }} to="/#worldview" onClick={() => { toggleDrawer(false); }}>
                        <div className={styles.mobileItem}>Worldview</div>
                    </HashLink>
                    <HashLink style={{ textDecoration: "none" }} to="/#roadmap" onClick={() => { toggleDrawer(false); }}>
                        <div className={styles.mobileItem}>Roadmap</div>
                    </HashLink>
                    <HashLink style={{ textDecoration: "none" }} to="/minting" onClick={() => { toggleDrawer(false); }}>
                        <div className={styles.mobileItem}>Minting</div>
                    </HashLink>
                    <button className={styles.myPageMobileButton} onClick={handleMobileMyPage}>
                        My Page
                        {mobileOpen ? <img src={KeyboardArrowUpIcon} alt="KeyboardArrowUp" /> : <img src={KeyboardArrowDownIcon} alt="KeyboardArrowDown" />}
                    </button>
                    <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
                        <List sx={{ backgroundColor: "#fefef2", marginLeft: "35px", marginRight: "30px" }}>
                            <Divider />
                            <ListItem button onClick={() => { handleMyPage() }}>
                                <Link className={styles.menuItem} to="/my-nft">
                                    My NFT
                                </Link>
                            </ListItem>
                            <ListItem button onClick={() => { handleMyPage() }}>
                                <Link className={styles.menuItem} to="/my-benefit">
                                    My 혜택
                                </Link>
                            </ListItem>
                        </List>
                    </Collapse>
                    <a className={styles.mallMobileButton} href="https://drgroot.co.kr/" target="_blank" rel="noreferrer">
                        <img src={mallIcon} alt="icon-mall" />
                        Direct Mall
                    </a>
                </List>
            </Drawer >
        );
    };

    return (
        <>
            <ScrollTop>
                <ScrollTopButton />
            </ScrollTop>
            <HideOnScroll>
                <AppBar sx={{ backgroundColor: "#fefef2", padding: { md: "28px 12px", xs: "0px 12px" }, paddingTop: { xs: "10px" }, paddingBottom: { md: "0px" }, }} position="sticky" elevation={0}>
                    <Toolbar variant="dense" sx={{ padding: { xs: "0px" } }} >
                        <Logo />
                        <div style={{ flexGrow: 1 }} />
                        <SectionDesktop />
                        <SectionMobile />
                        <button className={styles.myPageButton} onClick={handleMyPage}>
                            My Page
                            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        </button>
                        <Collapse in={open} timeout="auto" unmountOnExit sx={{ position: "absolute", right: "0", top: "20px" }}>
                            <List sx={{ position: "relative", marginTop: "16px", width: "113px", right: "210%" }}>
                                <ListItem button sx={{
                                    backgroundColor: "#fff",
                                    border: "solid 1px #666",
                                    color: "rgba(51, 51, 51, 0.6)",
                                    height: "38px",
                                    display: "flex",
                                    justifyContent: "center",
                                    "&:hover": {
                                        backgroundColor: "#fff",
                                    }
                                }}
                                    onClick={() => { handleMyPage() }}>
                                    <Link className={styles.menuItem} to="/my-nft">
                                        My NFT
                                    </Link>
                                </ListItem>
                                <ListItem button sx={{
                                    backgroundColor: "#fff",
                                    border: "solid 1px #666",
                                    borderTop: "none",
                                    height: "38px",
                                    display: "flex",
                                    justifyContent: "center",
                                    "&:hover": {
                                        backgroundColor: "#fff",
                                    }
                                }} onClick={() => { handleMyPage() }}>
                                    <Link className={styles.menuItem} to="/my-benefit">
                                        My 혜택
                                    </Link>
                                </ListItem>
                            </List>
                        </Collapse>
                        <a className={styles.mallButton} href="https://drgroot.co.kr/" target="_blank" rel="noreferrer">
                            <img src={mallIcon} alt="icon-mall" />
                            Direct Mall
                        </a>
                    </Toolbar>
                    <Divider sx={{ borderBottom: "2px #000 solid", width: "100%", margin: "auto", marginTop: { md: "20px", xs: "0px" } }} />
                </AppBar>
            </HideOnScroll>
            <MobileDrawer />
        </>
    );
};

export default Header;