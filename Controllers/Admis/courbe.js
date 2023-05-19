                // Données de retraits et dépôts par heure (exemples)
                var data = [
                    { heure: 0, retraits: 10, depots: 5 },
                    { heure: 1, retraits: 8, depots: 7 },
                    { heure: 2, retraits: 12, depots: 3 },
                    { heure: 3, retraits: 5, depots: 9 },
                    // Ajoutez les autres heures ici...
                ];
        
                // Crée un tableau pour les heures, retraits et dépôts
                var heures = data.map(function(item) {
                    return item.heure;
                });
                var retraits = data.map(function(item) {
                    return item.retraits;
                });
                var depots = data.map(function(item) {
                    return item.depots;
                });
        
                // Crée le graphique en utilisant Chart.js
                var ctx = document.getElementById("myChart").getContext("2d");
                var myChart = new Chart(ctx, {
                    type: "line",
                    data: {
                        labels: heures,
                        datasets: [
                            {
                                label: "Retraits",
                                data: retraits,
                                backgroundColor: "rgba(255, 99, 132, 0.2)",
                                borderColor: "rgba(255, 99, 132, 1)",
                                borderWidth: 1
                            },
                            {
                                label: "Dépôts",
                                data: depots,
                                backgroundColor: "rgba(54, 162, 235, 0.2)",
                                borderColor: "rgba(54, 162, 235, 1)",
                                borderWidth: 1
                            }
                        ]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });