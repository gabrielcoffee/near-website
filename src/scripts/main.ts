import { LANG_STORAGE_KEY, SMOOTH_SCROLL } from "../config";
import { initBoil } from "./boil";
import { initHeader } from "./header";
import { initReveal } from "./reveal";
import { initSmoothScroll } from "./smooth";
import { initParallax } from "./parallax";
import { initIntro } from "./intro";
import { initLangSwitch } from "./lang";
import { initPhone } from "./phone";
import { initRoadmap } from "./roadmap";

initHeader();
initReveal();
initBoil();
initIntro(() => initParallax());
initPhone();
initRoadmap();
initLangSwitch(LANG_STORAGE_KEY);
initSmoothScroll(SMOOTH_SCROLL);
