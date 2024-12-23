import { createClient } from '@supabase/supabase-js';
import { PROJECT_API_KEYS, PROJECT_URL } from '@env';

export const supabase = createClient(PROJECT_URL, PROJECT_API_KEYS);
