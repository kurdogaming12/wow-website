<!DOCTYPE html>
<html lang="de" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DeinBot - Der ultimative Discord Bot</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        discord: '#5865F2',
                        discordDark: '#404eed',
                    }
                }
            }
        }
    </script>
    <style>
        @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes pulse-glow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
        }
        .animate-pulse-glow {
            animation: pulse-glow 4s ease-in-out infinite;
        }
    </style>
</head>
<body class="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-discord selection:text-white relative overflow-x-hidden">

    <!-- Navbar mit Effektglas -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            <!-- Logo & Name mit Glitzer-Ring -->
            <div class="flex items-center space-x-3">
                <div class="relative">
                    <div class="absolute -inset-1.5 bg-gradient-to-r from-discord via-pink-500 to-indigo-500 rounded-full blur opacity-70 animate-pulse-glow"></div>
                    <img src="logo.png" alt="Logo" class="relative w-10 h-10 rounded-full object-cover border-2 border-slate-800" onerror="this.style.display='none'; document.getElementById('fallback-logo').style.display='flex';">
                    <div id="fallback-logo" style="display:none;" class="relative w-10 h-10 rounded-full bg-discord items-center justify-center font-bold text-xl shadow-lg shadow-discord/30 text-white">
                        <i class="fa-solid fa-robot"></i>
                    </div>
                </div>
                <span class="text-xl font-extrabold tracking-wide text-white drop-shadow-md">DeinBot</span>
            </div>
            
            <!-- Navigation -->
            <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                <a href="#features" class="hover:text-white transition">Features</a>
                <a href="#commands" class="hover:text-white transition">Befehle</a>
                <a href="#community" class="hover:text-white transition">Community</a>
            </nav>

            <!-- Discord Login & Invite -->
            <div class="flex items-center space-x-4">
                <!-- Login-Button (Nicht eingeloggt) -->
                <div id="login-container">
                    <a id="login-btn" href="#" class="bg-discord hover:bg-discordDark text-white px-4 py-2.5 rounded-xl font-medium text-sm transition shadow-lg shadow-discord/20 flex items-center space-x-2 border border-white/10">
                        <i class="fa-brands fa-discord"></i>
                        <span>Mit Discord einloggen</span>
                    </a>
                </div>

                <!-- User Profil (Eingeloggt) -->
                <div id="user-profile" class="hidden flex items-center space-x-3 bg-slate-900/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl shadow-xl">
                    <img id="user-avatar" src="" alt="Avatar" class="w-8 h-8 rounded-full border border-discord">
                    <span id="user-name" class="text-sm font-semibold text-white"></span>
                    <button onclick="logout()" class="text-slate-400 hover:text-red-400 text-xs ml-2 transition" title="Ausloggen">
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </button>
                </div>

                <a href="HIER_DEINEN_INVITE_LINK_EINTRAGEN" target="_blank" class="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition hidden sm:flex items-center space-x-2 border border-white/10 backdrop-blur-md">
                    <i class="fa-brands fa-discord"></i>
                    <span>Bot einladen</span>
                </a>
            </div>
        </div>
    </header>

    <!-- Hero Section mit Banner-Hintergrund -->
    <section class="relative pt-40 pb-28 md:pt-52 md:pb-36 overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="banner.png" alt="Banner" class="w-full h-full object-cover object-center filter brightness-50 scale-105 transform">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950"></div>
        </div>

        <!-- Glitzer-Ringe Animation -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0">
            <div class="absolute inset-0 rounded-full border border-discord/30 animate-spin-slow"></div>
            <div class="absolute inset-10 rounded-full border border-pink-500/20 animate-spin-slow" style="animation-direction: reverse; animation-duration: 20s;"></div>
            <div class="absolute inset-20 bg-discord/20 blur-[120px] rounded-full animate-pulse-glow"></div>
        </div>

        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div class="inline-flex items-center space-x-2 bg-slate-900/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-discord mb-6 shadow-lg">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Online & Bereit für deinen Server</span>
            </div>
            
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 drop-shadow-lg">
                Der smarte Begleiter für <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-discord via-purple-400 to-pink-400">deinen Discord Server</span>
            </h1>
            
            <p class="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 mb-10 drop-shadow">
                Erlebe Moderation, Musik und Unterhaltung auf höchstem Niveau. Stabil, schnell und kinderleicht zu bedienen.
            </p>
            
            <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="HIER_DEINEN_INVITE_LINK_EINTRAGEN" target="_blank" class="w-full sm:w-auto bg-discord hover:bg-discordDark text-white px-8 py-4 rounded-xl font-semibold text-base transition shadow-xl shadow-discord/30 flex items-center justify-center space-x-3 border border-white/10">
                    <i class="fa-brands fa-discord text-xl"></i>
                    <span>Jetzt hinzufügen</span>
                </a>
                <a href="#features" class="w-full sm:w-auto bg-slate-900/65 hover:bg-slate-800/80 backdrop-blur-md border border-white/10 text-slate-200 px-8 py-4 rounded-xl font-semibold text-base transition flex items-center justify-center space-x-2 shadow-lg">
                    <span>Mehr erfahren</span>
                    <i class="fa-solid fa-arrow-down text-xs"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">Features, die überzeugen</h2>
                <p class="text-slate-400 text-lg">Alles, was dein Server braucht, in einem einzigen Bot.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl group hover:border-discord/50 transition shadow-xl">
                    <div class="w-12 h-12 bg-discord/10 text-discord rounded-xl flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition border border-discord/20">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Sicherheit & Auto-Mod</h3>
                    <p class="text-slate-400">Schütze deine Community vor Spam, Links und unerwünschten Raids automatisch rund um die Uhr.</p>
                </div>

                <div class="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl group hover:border-discord/50 transition shadow-xl">
                    <div class="w-12 h-12 bg-discord/10 text-discord rounded-xl flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition border border-discord/20">
                        <i class="fa-solid fa-music"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Musik ohne Limits</h3>
                    <p class="text-slate-400">Verbinde den Sprachkanal und genieße hochauflösende Musikwiedergabe direkt von unterstützten Plattformen.</p>
                </div>

                <div class="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl group hover:border-discord/50 transition shadow-xl">
                    <div class="w-12 h-12 bg-discord/10 text-discord rounded-xl flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition border border-discord/20">
                        <i class="fa-solid fa-bolt"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Blitzschnelle Commands</h3>
                    <p class="text-slate-400">Dank moderner Slash-Commands reagiert der Bot in Millisekunden auf deine Eingaben.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Commands Section -->
    <section id="commands" class="py-20 bg-slate-900/20 border-t border-slate-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">Wichtige Befehle</h2>
                <p class="text-slate-400 text-lg">Ein kleiner Einblick in die Befehlsstruktur.</p>
            </div>

            <div class="space-y-4">
                <div class="bg-slate-900/60 backdrop-blur-md border border-white/10 p-5 rounded-xl flex items-center justify-between shadow-lg">
                    <div>
                        <code class="text-discord font-bold text-base">/help</code>
                        <p class="text-sm text-slate-400 mt-1">Listet alle verfügbaren Befehle und Kategorien auf.</p>
                    </div>
                    <span class="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full font-mono border border-white/5">Info</span>
                </div>

                <div class="bg-slate-900/60 backdrop-blur-md border border-white/10 p-5 rounded-xl flex items-center justify-between shadow-lg">
                    <div>
                        <code class="text-discord font-bold text-base">/ban [User] [Grund]</code>
                        <p class="text-sm text-slate-400 mt-1">Verbannt einen Nutzer regelkonform vom Server.</p>
                    </div>
                    <span class="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full font-mono border border-white/5">Moderation</span>
                </div>

                <div class="bg-slate-900/60 backdrop-blur-md border border-white/10 p-5 rounded-xl flex items-center justify-between shadow-lg">
                    <div>
                        <code class="text-discord font-bold text-base">/play [Titel]</code>
                        <p class="text-sm text-slate-400 mt-1">Spielt einen Song im aktuellen Sprachkanal ab.</p>
                    </div>
                    <span class="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full font-mono border border-white/5">Fun / Musik</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Community / Widget Section -->
    <section id="community" class="py-20 bg-slate-950 border-t border-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">Werde Teil der Community</h2>
                    <p class="text-slate-400 text-lg mb-6">
                        Hast du Fragen zum Bot, brauchst Hilfe bei der Einrichtung oder möchtest neue Features vorschlagen? Komm auf unseren offiziellen Discord-Server!
                    </p>
                    <a href="HIER_DEINEN_DISCORD_SERVER_LINK_EINTRAGEN" target="_blank" class="inline-flex items-center space-x-3 bg-discord hover:bg-discordDark text-white px-6 py-3.5 rounded-xl font-medium transition shadow-lg shadow-discord/20 border border-white/10">
                        <i class="fa-brands fa-discord text-xl"></i>
                        <span>Discord Server beitreten</span>
                    </a>
                </div>
                
                <div class="flex justify-center">
                    <iframe src="https://discord.com/widget?id=DEINE_SERVER_ID_HIER_EINTRAGEN&theme=dark" width="350" height="450" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" class="rounded-2xl border border-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-md"></iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-950 border-t border-slate-900 py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-discord flex items-center justify-center font-bold text-white text-xs">
                    <i class="fa-solid fa-robot"></i>
                </div>
                <span class="text-white font-bold text-sm">DeinBot</span>
            </div>
            <p class="text-xs text-slate-500">
                &copy; 2026 DeinBot. Nicht von Discord Inc. unterstützt oder affilliiert.
            </p>
        </div>
    </footer>

    <!-- Nur Login-Link generieren und User-Daten laden (kein Callback-Code hier!) -->
    <script>
        const CLIENT_ID = 'DEINE_CLIENT_ID_HIER_EINTRAGEN'; // Deine Client ID
        // Der Redirect leitet jetzt sauber zur callback.html weiter
        const REDIRECT_URI = window.location.origin + '/callback.html';

        const loginBtn = document.getElementById('login-btn');
        loginBtn.href = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=token&scope=identify`;

        // Prüfen, ob User eingeloggt ist (Token im Browser gespeichert)
        window.addEventListener('DOMContentLoaded', () => {
            const token = localStorage.getItem('discord_token');
            if (token) {
                fetchUserData(token);
            }
        });

        async function fetchUserData(token) {
            try {
                const response = await fetch('https://discord.com/api/users/@me', {
                    headers: { authorization: `Bearer ${token}` },
                });

                if (!response.ok) throw new Error('Token abgelaufen');

                const data = await response.json();
                
                document.getElementById('login-container').classList.add('hidden');
                document.getElementById('user-profile').classList.remove('hidden');
                document.getElementById('user-name').textContent = data.username;
                
                const avatarUrl = data.avatar 
                    ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`
                    : `https://cdn.discordapp.com/embed/avatars/${parseInt(data.discriminator || '0') % 5}.png`;
                
                document.getElementById('user-avatar').src = avatarUrl;
            } catch (error) {
                logout();
            }
        }

        function logout() {
            localStorage.removeItem('discord_token');
            document.getElementById('user-profile').classList.add('hidden');
            document.getElementById('login-container').classList.remove('hidden');
        }
    </script>
</body>
</html>
