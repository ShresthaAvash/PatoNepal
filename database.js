const products = [
    // === MEN'S WEAR ===
    {
        id: "calix-top-coat",
        name: "CALIX TOP COAT",
        category: "men",
        // ALSO TAGGED AS NEWCOMERS (for demo purposes we handle this via logic or duplicate data if needed, 
        // but for now I will add a specific 'newcomers' property or just duplicate entries with that category)
        price: 35000,
        img: "https://images.unsplash.com/photo-1593032465175-d81201b70459?q=80&w=800",
        fabricImg: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=200",
        fabricName: "Merino Wool"
    },
    {
        id: "archer-cashmere",
        name: "ARCHER CASHMERE",
        category: "men",
        price: 42000,
        img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
        fabricImg: "https://images.unsplash.com/photo-1604071477478-43b9c748c03c?q=80&w=200",
        fabricName: "Italian Cashmere"
    },
    // ... (Keep existing Men's items) ...
    {
        id: "peltot-top-coat",
        name: "PELTOT TOP COAT",
        category: "men",
        price: 32000,
        img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800",
        fabricImg: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=200",
        fabricName: "Twill Wool"
    },
    // ... (Keep all your existing data) ...

    // === NEWCOMERS (Subset for the new category page) ===
    {
        id: "new-arrival-1",
        name: "MIDNIGHT TUXEDO",
        category: "newcomers",
        price: 55000,
        img: "https://images.unsplash.com/photo-1594938298603-c8148c47e356?q=80&w=800",
        fabricImg: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=200",
        fabricName: "Midnight Wool"
    },
    {
        id: "new-arrival-2",
        name: "VELVET BLAZER",
        category: "newcomers",
        price: 48000,
        img: "https://images.unsplash.com/photo-1551488852-081bd4c9a6ef?q=80&w=800",
        fabricImg: "https://images.unsplash.com/photo-1616422204963-c71c4fa47063?q=80&w=200",
        fabricName: "Red Velvet"
    },
    {
        id: "new-arrival-3",
        name: "AUTUMN TRENCH",
        category: "newcomers",
        price: 39000,
        img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
        fabricImg: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=200",
        fabricName: "Waterproof Cotton"
    },
    
    // ... (Keep suits, fabrics, women's data from previous step) ...
    // Note: Ensure the rest of your database.js file is preserved.
    // I am just adding the specific 'newcomers' items here.
    
    // === REST OF DATA (Shortened for brevity, paste your full previous data here) ===
    {
        id: "seth-notch",
        name: "SETH NOTCH SUIT",
        category: "suits",
        price: 25000,
        img: "https://images.unsplash.com/photo-1594938298603-c8148c47e356?q=80&w=800",
        fabricImg: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=200",
        fabricName: "Fine Wool 120s"
    },
    {
        id: "resulote-cashmere",
        name: "RESULOTE CASHMERE",
        category: "women",
        price: 38000,
        img: "https://images.unsplash.com/photo-1584030318544-56780373e96e?q=80&w=800", 
        fabricImg: "https://images.unsplash.com/photo-1604071477478-43b9c748c03c?q=80&w=200",
        fabricName: "Mongolian Cashmere"
    },
    // ... etc
    {
        id: "fabric-sample-1",
        name: "ORGANIC COTTON",
        category: "fabrics",
        price: 0,
        img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800",
        fabricImg: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=200",
        fabricName: "Organic Cotton"
    }
];