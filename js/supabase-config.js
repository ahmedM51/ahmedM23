// Supabase Configuration for Smart Study Platform
// This file configures real Supabase connection only

// Prevent duplicate declarations and script loading issues
if (!window.SUPABASE_INITIALIZED) {
    window.SUPABASE_INITIALIZED = true;
    
    // Configuration - Real Supabase credentials
    window.SUPABASE_CONFIG = {
        url: 'https://pxmhwwovxrnefiryywva.supabase.co',
        anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4bWh3d292eHJuZWZpcnl5d3ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MzgzNjQsImV4cCI6MjA3MjAxNDM2NH0.FqzkWel93icaJ781ZCPhvzfVJu4iwqCa3hxV3AKuRlA'
    };

    // Global Supabase client
    window.supabaseClient = null;

    // Initialize Supabase client
    window.initializeSupabase = function() {
        try {
            if (window.supabaseClient) {
                console.log('✅ Supabase already initialized');
                return window.supabaseClient;
            }
            
            if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
                window.supabaseClient = window.supabase.createClient(
                    window.SUPABASE_CONFIG.url, 
                    window.SUPABASE_CONFIG.anonKey, 
                    {
                        auth: {
                            autoRefreshToken: true,
                            persistSession: true,
                            detectSessionInUrl: true
                        }
                    }
                );
                console.log('✅ Supabase client initialized successfully');
                return window.supabaseClient;
            } else {
                throw new Error('Supabase library not loaded');
            }
        } catch (error) {
            console.error('❌ Failed to initialize Supabase:', error);
            throw error;
        }
    };

    console.log('📦 Supabase configuration loaded');
}
