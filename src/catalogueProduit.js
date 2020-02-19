var MonApp = (function () {
    maxProduit = produit.length;
    var nombreparPage = 12;
    var mode ="";
    var panierDb = [];
    var direction = 0; //0 produit id increase
    var afficherMode = "vignette";


    var App = {
        Afficher:function(){

            

            if (nombreparPage == "tous") nombreparPage = maxProduit;
            console.log("nombreparPage is"+nombreparPage+"maxProduit is"+maxProduit);
            if (afficherMode == "vignette") {
                //afficher dans vignette mode
                if (direction == 0) {

                    var oDivsub = document.getElementById("content");
                    if (oDivsub) oDivsub.remove(); //remove div node clear the page
                    var oElementDiv = document.createElement("div"); //creat a container
                    oElementDiv.setAttribute("class","w3-row w3-container");
                    oElementDiv.setAttribute("id", "content");
                    document.body.appendChild(oElementDiv);
                    
                    for (var i = 0; i < nombreparPage; i++) {
                        var element = "<article class='produit'>" +
                            "<header class='nom'>" + produit[i].nom + "</header>" +
                            '<section class="description">produit id: ' + produit[i].id + '</section>' +
                            "<section class='image'><img src='" + produit[i].image + "'></section>" +
                            '<section class="description">' + produit[i].description + '</section>' +
                            '<section class="prix">' +
                            '<span class="prix-valeur">' + produit[i].prix.valeur + '</span>' +
                            '<span class="prix-unite">' + produit[i].prix.unite + '</span> </section>' +
                            '<section class="categorie">' + produit[i].categorie + '</section>' +
                            '</article>';
                        

                        var oElement = document.createElement("div");
                        oElement.setAttribute("class","w3-col s3 w3-center");
                        oElement.setAttribute("id", i);
                        oElement.innerHTML = element;
                        document.getElementById("content").appendChild(oElement);
                        var oPanier = document.createElement("button");
                        oPanier.setAttribute("id", "btn"+produit[i].id);
                        oPanier.setAttribute("class","w3-button w3-green w3-round-large");
                        oPanier.setAttribute("onclick", "MonApp.AjouterProduit(event)"); //use product id to be ajouter button id
                        oPanier.innerHTML = "Ajouter";
                        document.getElementById(produit[i].id).appendChild(oPanier);

                    }

                } else {

                    var oDivsub = document.getElementById("content");
                    if (oDivsub) oDivsub.remove(); //remove div node clear the page

                    var oElementDiv = document.createElement("div"); //creat container
                    oElementDiv.setAttribute("class","w3-row w3-container");
                    oElementDiv.setAttribute("id", "content");
                    document.body.appendChild(oElementDiv);



                    for (var i = nombreparPage - 1; i >= 0; i--) {

                        var element = "<article class='produit'>" +
                            "<header class='nom'>" + produit[i].nom + "</header>" +
                            '<section class="description">produit id: ' + produit[i].id + '</section>' +
                            "<section class='image'><img src='" + produit[i].image + "'  ></section>" +
                            '<section class="description">' + produit[i].description + '</section>' +
                            '<section class="prix">' +
                            '<span class="prix-valeur">' + produit[i].prix.valeur + '</span>' +
                            '<span class="prix-unite">' + produit[i].prix.unite + '</span> </section>' +
                            '<section class="categorie">' + produit[i].categorie + '</section>' +
                            '</article>';
                        var oElement = document.createElement("div");
                        oElement.setAttribute("class","w3-col s3 w3-center");
                        oElement.setAttribute("id", i);
                        oElement.innerHTML = element;
                        document.getElementById("content").appendChild(oElement);
                        var oPanier = document.createElement("button");
                        oPanier.setAttribute("id", "btn"+produit[i].id);
                        oPanier.setAttribute("class","w3-button w3-green w3-round-large");
                        oPanier.setAttribute("onclick", "MonApp.AjouterProduit(event)"); //use product id to be ajouter button id
                        oPanier.innerHTML = "Ajouter";
                        document.getElementById(produit[i].id).appendChild(oPanier);
                    }

                }
            }

            if (afficherMode == "liste") {
                //afficher dans list model
                if (direction == 0) {

                    var oDivsub = document.getElementById("content");
                   if (oDivsub) oDivsub.remove(); //remove div node clear the page
                    var oElementDiv = document.createElement("div"); //creat a container
                    oElementDiv.setAttribute("id", "content");
                    document.body.appendChild(oElementDiv);
                    
                    var tableHead = "<table class='w3-table-all w3-striped w3-bordered w3-centered w3-hoverable'><tr><th>Produit Nom</th><th>produit ID</th><th>img</th><th>Description</th><th>Prix</th><th>unite</th><th>Catagorie</th><th>Ajouter au panier</th></tr>";
                    var tableBody ='';
                    for (var i = 0; i < nombreparPage; i++) {
                        var element = "<tr>" +
                            "<td>" + produit[i].nom + "</td>" +
                            '<td>' + produit[i].id + '</td>' +
                            "<td class='image'><img src='" + produit[i].image + "'></td>" +
                            '<td>' + produit[i].description + '</td>' +
                            '<td>' + produit[i].prix.valeur + '</td>' +
                            '<td>' + produit[i].prix.unite + '</td>' +
                            '<td>' + produit[i].categorie + '</td>' +
                            "<td><button id='" + produit[i].id + "' onclick='MonApp.AjouterProduit(event)' class='w3-button w3-green w3-round-large'>Ajouter</button></td>" +
                            '</tr>';
                        tableBody = tableBody + element;


                    }
                    var tableEnd = "</table>";
                    var element1 = tableHead + tableBody + tableEnd;
                    var oElement = document.createElement("div");
                    oElement.setAttribute("id", "afficherTable");
                    oElement.innerHTML = element1;
                    document.getElementById("content").appendChild(oElement);

                } if (direction == 1) {

                    var oDivsub = document.getElementById("content");
                    if (oDivsub) oDivsub.remove(); //remove div node clear the page

                    var oElementDiv = document.createElement("div"); //creat container
                    oElementDiv.setAttribute("id", "content");
                    document.body.appendChild(oElementDiv);

                    var tableHead = "<table class='w3-table-all w3-striped w3-bordered w3-centered w3-hoverable'><tr><th>Produit Nom</th><th>produit ID</th><th>img</th><th>Description</th><th>Prix</th><th>unite</th><th>Catagorie</th><th>Ajouter au panier</th></tr>";
                    var tableBody ='';
                    for (var i = nombreparPage - 1; i >= 0; i--) {

                        var element = "<tr>" +
                            "<td>" + produit[i].nom + "</td>" +
                            '<td>' + produit[i].id + '</td>' +
                            "<td class='image'><img src='" + produit[i].image + "'></td>" +
                            '<td>' + produit[i].description + '</td>' +
                            '<td>' + produit[i].prix.valeur + '</td>' +
                            '<td>' + produit[i].prix.unite + '</td>' +
                            '<td>' + produit[i].categorie + '</td>' +
                            "<td><button id='" + produit[i].id + "' onclick='MonApp.AjouterProduit(event)' class='w3-button w3-green w3-round-large'>Ajouter</button></td>" +
                            '</tr>';
                        var tableBody = tableBody + element;


                    }
                    var tableEnd = "</table>";
                    var element1 = tableHead + tableBody + tableEnd;
                    var oElement = document.createElement("div");
                    oElement.setAttribute("id", i);
                    oElement.innerHTML = element1;
                    document.getElementById("content").appendChild(oElement);

                }


            }
            

        },
        ChangerPage:function(numPage) { //use button setting page increasement or decreasement by product id
            numPage = numPage.target.id;
            if (numPage == "changerPageUp") direction = 0;
            if (numPage == "changerPageDown") direction = 1;
            this.Afficher();
            
            return mode;

        },
        getNombreProduit:function() {
            nbProduitDansPage = document.getElementsByName('nbProduitDansPage')[0].value;
            if(nbProduitDansPage) this.setNombreParPage(nbProduitDansPage);
        },
        setNombreParPage:function(nombre) {
               nombreparPage = nombre;
                
                
            
            //this.Afficher();
        },
        setModeAffichage:function() {
            afficherMode=document.getElementsByName('afficherMode')[0].value;
            //console.log(afficherMode);
            //this.Afficher();
        },
        controlAfficher:function(){
            this.getNombreProduit();
            this.setModeAffichage();
            
                if(!afficherMode) {
                    afficherMode = "vignette";
                    this.Afficher();
                    
                }
            this.Afficher();
            
        },

        AjouterProduit:function(produit) {
            var produitId = produit.target.id;
            if (!panierDb.includes(produitId)) {
                panierDb.push(produitId);
            } else {
                console.log("product alread in cart");
            }
            document.getElementById("panier").innerHTML = panierDb.length; //display product number in shopping cart
           
        }
    };

    return App;
})();
