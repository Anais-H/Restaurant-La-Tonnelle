import { createClient } from "@sanity/client";

export default createClient({
    projectId: '009d9zco',
    dataset: 'production',
    useCdn: false
});