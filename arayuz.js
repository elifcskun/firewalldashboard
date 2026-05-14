
// Basit Gauge Yapılandırması (Doughnut Chart kullanarak)
function createGauge(id, color) {
    return new Chart(document.getElementById(id), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [35, 65], // Örnek doluluk %35
                backgroundColor: [color, '#eeeeee'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '80%',
            responsive: false,
            plugins: { legend: { display: false } }
        }
    });
}

// Gauge'leri oluştur
createGauge('harddiskChart', '#3498db');
createGauge('ramChart', '#e67e22');
createGauge('cpuChart', '#e74c3c');

// Trafik Grafiği (Line Chart)
const gaugeOptions = (color) => ({
    cutout: '75%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
    }
});

function updateGauge(id, percent, color) {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [percent, 100 - percent],
                backgroundColor: [color, '#e5e7eb'], // Aktif renk ve gri zemin
                borderWidth: 0,
                borderRadius: 5, // Köşeleri yuvarlatılmış modern görünüm
                circumference: 270, // Tam daire değil, altı açık gösterge stili
                rotation: 225
            }]
        },
        options: gaugeOptions(color)
    });
}

// Grafiklerin çizilmesi
updateGauge('harddiskChart', 35, '#3498db'); // Mavi
updateGauge('ramChart', 55, '#f39c12');      // Turuncu
updateGauge('cpuChart', 20, '#e74c3c');      // Kırmızıırmızı