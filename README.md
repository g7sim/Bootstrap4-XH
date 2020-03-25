
Dies ist die Cmsimple-XH - Implementation  eines Bootstrap 4 - Templates mit tiefer Ebenenverschachtelung.

Sie basiert auf Smartmenus - Bootstrap (https://github.com/vadikom/smartmenus-bootstrap-4) und ist daher genauso unter MIT - Lizenz.

Das spezielle blaue bootstrap.min.litera.css ist von https://github.com/thomaspark/bootswatch herunterladbar. 

Die dortigen herunterladbaren Templates laufen mit diesem Template durch einfachen Austausch der bootstrap.min.css. 

Evtl. sind Schriftfarben und Farben der Dropdowns per init.js und stylesheet.css anzupassen.

Für eigene Varianten eignen sich beispielsweise

http://upgrade-bootstrap.bootply.com/bootstrap-4-customizer und https://bootstrap.build/

(bzw. https://github.com/bootstrap-build/bootstrap.build)

* Das Unterklappen eines langen Navs im mittleren Modus ist ein Breiten - 'Bug'(navbar-expand-lg), den Bootswatch.com leider ebenfalls hat. Der Navbar geht dann zu früh in einen Hamburger über. Die Korrektur über  <nav class="navbar navbar-expand-sm 
führt bei breiten Navs zu 2 Zeilen, die immer noch viel besser zu handbaben sind als verschachtelte Hamburger-Menus
Man sollte daher andernfalls im CMS  keinen Seitentitel eintragen. 

P.S. Das Adminmenu wird leider wie auch bei einigen anderen Templates verdeckt. Bitte im CMS unter assets/core.css den Wert xh_adminmenu_fixed { z-index: 9999;} setzen - habe ich hier jetzt auch in die Stylesheet eingetragen.

Achtung : Diese Version ist die Beta 2 !!! 

Wünsche und Anregungen bitte unter Issues.

