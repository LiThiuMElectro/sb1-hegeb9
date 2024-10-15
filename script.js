$(document).ready(function() {
    // Load home page by default
    loadPage('home');

    // Handle navigation
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        var page = $(this).data('page');
        loadPage(page);
    });

    function loadPage(page) {
        $.get(page + '.html', function(data) {
            $('#content').html(data);
            if (page === 'leaderboard') {
                loadLeaderboardData();
            }
        });
    }

    function loadLeaderboardData() {
        // Simulated leaderboard data
        var leaderboardData = [
            { id: 1, playername: 'Player A', wager: 10000, prize: 5000 },
            { id: 2, playername: 'Player B', wager: 9500, prize: 4000 },
            { id: 3, playername: 'Player C', wager: 9000, prize: 3000 },
            { id: 4, playername: 'Player D', wager: 8500, prize: 2000 },
            { id: 5, playername: 'Player E', wager: 8000, prize: 1000 },
            { id: 6, playername: 'Player F', wager: 7500, prize: 500 },
            { id: 7, playername: 'Player G', wager: 7000, prize: 250 },
            { id: 8, playername: 'Player H', wager: 6500, prize: 100 },
            { id: 9, playername: 'Player I', wager: 6000, prize: 50 },
            { id: 10, playername: 'Player J', wager: 5500, prize: 25 },
        ];

        var tableBody = $('#leaderboardTable tbody');
        tableBody.empty();

        $.each(leaderboardData, function(index, player) {
            var row = $('<tr>');
            row.append($('<td>').text(index + 1));
            row.append($('<td>').text(player.playername));
            row.append($('<td>').text('$' + player.wager));
            row.append($('<td>').text('$' + player.prize));
            tableBody.append(row);
        });

        // Update podium
        $('#firstPlace').text(leaderboardData[0].playername);
        $('#secondPlace').text(leaderboardData[1].playername);
        $('#thirdPlace').text(leaderboardData[2].playername);
    }
});

// Initialize Lucide icons
lucide.createIcons();