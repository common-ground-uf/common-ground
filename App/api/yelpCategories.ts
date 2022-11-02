interface Category { title: string, alias: string, parents: Array<String>, country_whitelist?: Array<String>, country_blacklist?: Array<String> }


const yelpCategories: Category[] = [
    {
        "alias": "abruzzese",
        "title": "Abruzzese",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "acaibowls",
        "title": "Acai Bowls",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "TR",
            "MX",
            "AR",
            "PL",
            "IT",
            "CL"
        ]
    },
    {
        "alias": "afghani",
        "title": "Afghan",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "MX",
            "TR"
        ]
    },
    {
        "alias": "african",
        "title": "African",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "TR"
        ]
    },
    {
        "alias": "alentejo",
        "title": "Alentejo",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "algarve",
        "title": "Algarve",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "alsatian",
        "title": "Alsatian",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR",
            "DE"
        ]
    },
    {
        "alias": "altoatesine",
        "title": "Altoatesine",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "andalusian",
        "title": "Andalusian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IT",
            "ES"
        ]
    },
    {
        "alias": "apulian",
        "title": "Apulian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT",
            "FR"
        ]
    },
    {
        "alias": "arabian",
        "title": "Arabic",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "DK"
        ]
    },
    {
        "alias": "arabpizza",
        "title": "Arab Pizza",
        "parents": [
            "arabian"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "argentine",
        "title": "Argentine",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "armenian",
        "title": "Armenian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "US",
            "AR",
            "GB",
            "CZ",
            "BE",
            "IT",
            "ES",
            "PL",
            "TR"
        ]
    },
    {
        "alias": "arroceria_paella",
        "title": "Arroceria / Paella",
        "parents": [
            "spanish"
        ],
        "country_whitelist": [
            "ES"
        ]
    },
    {
        "alias": "asianfusion",
        "title": "Asian Fusion",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "asturian",
        "title": "Asturian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "ES"
        ]
    },
    {
        "alias": "australian",
        "title": "Australian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "austrian",
        "title": "Austrian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "ES",
            "DK"
        ]
    },
    {
        "alias": "auvergnat",
        "title": "Auvergnat",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "azores",
        "title": "Azores",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "backshop",
        "title": "Backshop",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "DE",
            "AT",
            "CH"
        ]
    },
    {
        "alias": "baden",
        "title": "Baden",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "bagels",
        "title": "Bagels",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "AU",
            "ES"
        ]
    },
    {
        "alias": "baguettes",
        "title": "Baguettes",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DE",
            "MX",
            "PT",
            "CZ",
            "IT",
            "SE",
            "NO",
            "TR"
        ]
    },
    {
        "alias": "bakeries",
        "title": "Bakeries",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "bangladeshi",
        "title": "Bangladeshi",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "DK",
            "MX",
            "ES",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "basque",
        "title": "Basque",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "AU",
            "DK",
            "CZ",
            "SG",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "bavarian",
        "title": "Bavarian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "DE",
            "AT"
        ]
    },
    {
        "alias": "bbq",
        "title": "Barbeque",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "AU",
            "BR"
        ]
    },
    {
        "alias": "beer_and_wine",
        "title": "Beer, Wine & Spirits",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "beergarden",
        "title": "Beer Garden",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "CZ",
            "DE",
            "AT"
        ]
    },
    {
        "alias": "beerhall",
        "title": "Beer Hall",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "DE",
            "AT"
        ]
    },
    {
        "alias": "beira",
        "title": "Beira",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "beisl",
        "title": "Beisl",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AT"
        ]
    },
    {
        "alias": "belgian",
        "title": "Belgian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "bento",
        "title": "Bento",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "berrichon",
        "title": "Berrichon",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "beverage_stores",
        "title": "Beverage Store",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "DE",
            "AT",
            "US",
            "PT",
            "CH",
            "CL",
            "AU",
            "BE",
            "IT",
            "ES",
            "NL",
            "TR"
        ]
    },
    {
        "alias": "bistros",
        "title": "Bistros",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "US"
        ]
    },
    {
        "alias": "blacksea",
        "title": "Black Sea",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "blowfish",
        "title": "Blowfish",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "bourguignon",
        "title": "Bourguignon",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "brasseries",
        "title": "Brasseries",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "MX",
            "AR"
        ]
    },
    {
        "alias": "brazilian",
        "title": "Brazilian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "brazilianempanadas",
        "title": "Brazilian Empanadas",
        "parents": [
            "brazilian"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "breakfast_brunch",
        "title": "Breakfast & Brunch",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "breweries",
        "title": "Breweries",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "brewpubs",
        "title": "Brewpubs",
        "parents": [
            "breweries"
        ],
        "country_blacklist": [
            "FR",
            "ES",
            "MX",
            "AR",
            "IT",
            "CL"
        ]
    },
    {
        "alias": "british",
        "title": "British",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "bubbletea",
        "title": "Bubble Tea",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "TR",
            "AT",
            "ES",
            "MX",
            "AR",
            "CH"
        ]
    },
    {
        "alias": "buffets",
        "title": "Buffets",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "bulgarian",
        "title": "Bulgarian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "NZ",
            "NL",
            "DK",
            "BR",
            "CA",
            "SG",
            "NO",
            "TR"
        ]
    },
    {
        "alias": "burgers",
        "title": "Burgers",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "burmese",
        "title": "Burmese",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "DK",
            "CZ",
            "ES",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "butcher",
        "title": "Butcher",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "CH",
            "DE",
            "AT"
        ]
    },
    {
        "alias": "cafes",
        "title": "Cafes",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "ES",
            "FI",
            "AR",
            "MX"
        ]
    },
    {
        "alias": "cafeteria",
        "title": "Cafeteria",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "IE",
            "FR",
            "BR",
            "CA",
            "SG",
            "SE",
            "NZ"
        ]
    },
    {
        "alias": "cajun",
        "title": "Cajun/Creole",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "AU",
            "ES",
            "SG",
            "PT"
        ]
    },
    {
        "alias": "cakeshop",
        "title": "Patisserie/Cake Shop",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "calabrian",
        "title": "Calabrian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "US",
            "IT",
            "FR"
        ]
    },
    {
        "alias": "cambodian",
        "title": "Cambodian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "DK",
            "CZ",
            "ES",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "candy",
        "title": "Candy Stores",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "canteen",
        "title": "Canteen",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FI",
            "DE",
            "JP",
            "AT",
            "CH",
            "DK",
            "CZ",
            "NO",
            "BE",
            "IT",
            "PL",
            "NL"
        ]
    },
    {
        "alias": "cantonese",
        "title": "Cantonese",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "JP",
            "US",
            "AR",
            "GB",
            "HK",
            "AU",
            "BE",
            "CA",
            "SG",
            "TW",
            "SE",
            "MY",
            "FR",
            "NZ",
            "IT",
            "NL"
        ]
    },
    {
        "alias": "caribbean",
        "title": "Caribbean",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "catalan",
        "title": "Catalan",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "US",
            "MX",
            "AR",
            "PT",
            "CL",
            "IT",
            "ES",
            "TR"
        ]
    },
    {
        "alias": "centralbrazilian",
        "title": "Central Brazilian",
        "parents": [
            "brazilian"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "cheekufta",
        "title": "Chee Kufta",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "DE",
            "TR"
        ]
    },
    {
        "alias": "cheese",
        "title": "Cheese Shops",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "cheesesteaks",
        "title": "Cheesesteaks",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IE",
            "AU",
            "US",
            "PL",
            "GB",
            "NL",
            "CA"
        ]
    },
    {
        "alias": "chicken_wings",
        "title": "Chicken Wings",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "FR",
            "JP",
            "PT",
            "CH",
            "CL",
            "DK",
            "NO",
            "BE",
            "IT",
            "ES",
            "NL"
        ]
    },
    {
        "alias": "chickenshop",
        "title": "Chicken Shop",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "chilean",
        "title": "Chilean",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FI",
            "FR",
            "BR",
            "CL"
        ]
    },
    {
        "alias": "chimneycakes",
        "title": "Chimney Cakes",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "US",
            "FR",
            "CZ",
            "PL"
        ]
    },
    {
        "alias": "chinese",
        "title": "Chinese",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "chocolate",
        "title": "Chocolatiers & Shops",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "churros",
        "title": "Churros",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "BR",
            "ES",
            "MX",
            "AR",
            "PT",
            "CL"
        ]
    },
    {
        "alias": "cideries",
        "title": "Cideries",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "FR",
            "JP",
            "DK",
            "NO",
            "BE",
            "IT",
            "NL",
            "TR"
        ]
    },
    {
        "alias": "coffee",
        "title": "Coffee & Tea",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "coffeeroasteries",
        "title": "Coffee Roasteries",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "coffeeteasupplies",
        "title": "Coffee & Tea Supplies",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "FI",
            "US",
            "MX",
            "AR",
            "PT",
            "CL",
            "PH",
            "CZ",
            "BR",
            "IT",
            "ES",
            "MY"
        ]
    },
    {
        "alias": "colombian",
        "title": "Colombian",
        "parents": [
            "latin"
        ],
        "country_whitelist": [
            "FI",
            "FR",
            "US",
            "MX",
            "AR",
            "CL",
            "BE",
            "CA",
            "ES"
        ]
    },
    {
        "alias": "comfortfood",
        "title": "Comfort Food",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FI",
            "CA",
            "JP",
            "US",
            "MX",
            "AR",
            "CL"
        ]
    },
    {
        "alias": "congee",
        "title": "Congee",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "HK",
            "SG",
            "TW",
            "MY"
        ]
    },
    {
        "alias": "convenience",
        "title": "Convenience Stores",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "conveyorsushi",
        "title": "Conveyor Belt Sushi",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "DE",
            "SG",
            "JP",
            "AT",
            "US",
            "CH",
            "HK",
            "BE",
            "TW",
            "IT",
            "PL",
            "SE",
            "NL"
        ]
    },
    {
        "alias": "corsican",
        "title": "Corsican",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "BE"
        ]
    },
    {
        "alias": "creperies",
        "title": "Creperies",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "csa",
        "title": "CSA",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "FR",
            "DE",
            "AT",
            "US",
            "CH"
        ]
    },
    {
        "alias": "cuban",
        "title": "Cuban",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "DK",
            "SG",
            "TR"
        ]
    },
    {
        "alias": "cucinacampana",
        "title": "Cucina campana",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "cupcakes",
        "title": "Cupcakes",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "CA",
            "ES",
            "CZ",
            "TR"
        ]
    },
    {
        "alias": "currysausage",
        "title": "Curry Sausage",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "DE",
            "AT"
        ]
    },
    {
        "alias": "customcakes",
        "title": "Custom Cakes",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "CH",
            "DE",
            "FR",
            "AT"
        ]
    },
    {
        "alias": "cypriot",
        "title": "Cypriot",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "DE",
            "AT"
        ]
    },
    {
        "alias": "czech",
        "title": "Czech",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IE",
            "FI",
            "DE",
            "FR",
            "US",
            "GB",
            "AU",
            "DK",
            "CZ",
            "BE",
            "CA",
            "IT",
            "PL",
            "SE",
            "NO"
        ]
    },
    {
        "alias": "czechslovakian",
        "title": "Czech/Slovakian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "MX",
            "AR",
            "PT"
        ]
    },
    {
        "alias": "dagashi",
        "title": "Dagashi",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "danish",
        "title": "Danish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DK",
            "SE",
            "FR",
            "NO"
        ]
    },
    {
        "alias": "delicatessen",
        "title": "Delicatessen",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "US"
        ]
    },
    {
        "alias": "delis",
        "title": "Delis",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FR",
            "BE",
            "IT",
            "SE",
            "NL",
            "PT",
            "CL"
        ]
    },
    {
        "alias": "desserts",
        "title": "Desserts",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "dimsum",
        "title": "Dim Sum",
        "parents": [
            "chinese"
        ],
        "country_blacklist": [
            "BR",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "diners",
        "title": "Diners",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "AU",
            "FI",
            "CZ",
            "SE"
        ]
    },
    {
        "alias": "dinnertheater",
        "title": "Dinner Theater",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FR",
            "JP",
            "BE",
            "IT",
            "NL"
        ]
    },
    {
        "alias": "distilleries",
        "title": "Distilleries",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "diyfood",
        "title": "Do-It-Yourself Food",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "FI",
            "DE",
            "FR",
            "MX",
            "NZ",
            "CH",
            "CL",
            "CZ",
            "AT",
            "IT",
            "ES",
            "SE"
        ]
    },
    {
        "alias": "dominican",
        "title": "Dominican",
        "parents": [
            "caribbean"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "donairs",
        "title": "Donairs",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "FR",
            "DK",
            "CZ",
            "BE",
            "CA",
            "PL",
            "TR"
        ]
    },
    {
        "alias": "donburi",
        "title": "Donburi",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "HK",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "donuts",
        "title": "Donuts",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "ES"
        ]
    },
    {
        "alias": "driedfruit",
        "title": "Dried Fruit",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "JP",
            "MX",
            "AR",
            "CL",
            "HK",
            "CZ",
            "BR",
            "TW",
            "ES",
            "SE",
            "PL",
            "TR"
        ]
    },
    {
        "alias": "dumplings",
        "title": "Dumplings",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IE",
            "DE",
            "JP",
            "AT",
            "PL",
            "GB",
            "NZ",
            "CH",
            "AU",
            "BE",
            "CA",
            "SG",
            "NL"
        ]
    },
    {
        "alias": "eastern_european",
        "title": "Eastern European",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU",
            "FR",
            "DK",
            "CZ",
            "NO"
        ]
    },
    {
        "alias": "easterngerman",
        "title": "Eastern German",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "easternmexican",
        "title": "Eastern Mexican",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "egyptian",
        "title": "Egyptian",
        "parents": [
            "mideastern"
        ],
        "country_whitelist": [
            "FR",
            "BE",
            "US",
            "IT",
            "CA"
        ]
    },
    {
        "alias": "eltern_cafes",
        "title": "Parent Cafes",
        "parents": [
            "restaurants",
            "food"
        ],
        "country_whitelist": [
            "CH",
            "DE",
            "AT"
        ]
    },
    {
        "alias": "emilian",
        "title": "Emilian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "empanadas",
        "title": "Empanadas",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "ES",
            "AR",
            "US",
            "CL"
        ]
    },
    {
        "alias": "eritrean",
        "title": "Eritrean",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DE",
            "AT",
            "US",
            "IT",
            "CH"
        ]
    },
    {
        "alias": "ethicgrocery",
        "title": "Ethical Grocery",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "FR",
            "DE",
            "JP",
            "AT",
            "US",
            "CH",
            "PH",
            "CZ",
            "BE",
            "NL",
            "MY",
            "TR"
        ]
    },
    {
        "alias": "ethiopian",
        "title": "Ethiopian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "MX",
            "SG",
            "CZ",
            "TR"
        ]
    },
    {
        "alias": "fado_houses",
        "title": "Fado Houses",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "falafel",
        "title": "Falafel",
        "parents": [
            "mediterranean"
        ],
        "country_blacklist": [
            "MX",
            "AR",
            "PT"
        ]
    },
    {
        "alias": "farmersmarket",
        "title": "Farmers Market",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "filipino",
        "title": "Filipino",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "DK",
            "CZ",
            "TR"
        ]
    },
    {
        "alias": "fischbroetchen",
        "title": "Fischbroetchen",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "fishmonger",
        "title": "Fishmonger",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "FI",
            "DE",
            "AT",
            "PT",
            "CH",
            "AU",
            "DK",
            "CZ",
            "NO",
            "BE",
            "IT",
            "PL",
            "SE",
            "NL"
        ]
    },
    {
        "alias": "fishnchips",
        "title": "Fish & Chips",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "BR",
            "PT"
        ]
    },
    {
        "alias": "flatbread",
        "title": "Flatbread",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DK",
            "DE",
            "AT",
            "PL",
            "CH"
        ]
    },
    {
        "alias": "flemish",
        "title": "Flemish",
        "parents": [
            "belgian"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "fondue",
        "title": "Fondue",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "ES",
            "DK",
            "CZ"
        ]
    },
    {
        "alias": "food_court",
        "title": "Food Court",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "TW",
            "FR",
            "TR"
        ]
    },
    {
        "alias": "fooddeliveryservices",
        "title": "Food Delivery Services",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "foodstands",
        "title": "Food Stands",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "foodtrucks",
        "title": "Food Trucks",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "SG"
        ]
    },
    {
        "alias": "franconian",
        "title": "Franconian",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "freiduria",
        "title": "Freiduria",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "ES",
            "MX",
            "AR",
            "CL"
        ]
    },
    {
        "alias": "french",
        "title": "French",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "friterie",
        "title": "Friterie",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "AU",
            "FR",
            "BE",
            "IT",
            "PL",
            "NL"
        ]
    },
    {
        "alias": "friulan",
        "title": "Friulan",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "frozenfood",
        "title": "Frozen Food",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "FR",
            "BE",
            "ES",
            "IT",
            "SG",
            "GB"
        ]
    },
    {
        "alias": "fuzhou",
        "title": "Fuzhou",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "HK",
            "SG",
            "TW",
            "MY"
        ]
    },
    {
        "alias": "galician",
        "title": "Galician",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "ES",
            "PT"
        ]
    },
    {
        "alias": "gamemeat",
        "title": "Game Meat",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "JP",
            "MX",
            "AR",
            "PT",
            "CL",
            "HK",
            "PH",
            "BR",
            "CA",
            "TW",
            "MY",
            "TR"
        ]
    },
    {
        "alias": "gastropubs",
        "title": "Gastropubs",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "gelato",
        "title": "Gelato",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "SG",
            "US",
            "PT",
            "PH",
            "AU",
            "DK",
            "CZ",
            "IT",
            "PL",
            "SE",
            "NO"
        ]
    },
    {
        "alias": "georgian",
        "title": "Georgian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FI",
            "DE",
            "US",
            "GB",
            "CH",
            "CZ",
            "AT",
            "PL"
        ]
    },
    {
        "alias": "german",
        "title": "German",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "giblets",
        "title": "Giblets",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "gluhwein",
        "title": "Mulled Wine",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "DE",
            "CZ",
            "AT",
            "SE",
            "CH"
        ]
    },
    {
        "alias": "gluten_free",
        "title": "Gluten-Free",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "gourmet",
        "title": "Specialty Food",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "gozleme",
        "title": "Gozleme",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "greek",
        "title": "Greek",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "grocery",
        "title": "Grocery",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "guamanian",
        "title": "Guamanian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "TR",
            "FR",
            "JP",
            "MX",
            "AR",
            "PL",
            "CL"
        ]
    },
    {
        "alias": "gyudon",
        "title": "Gyudon",
        "parents": [
            "donburi"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "hainan",
        "title": "Hainan",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "HK",
            "PH",
            "US",
            "SG",
            "MY"
        ]
    },
    {
        "alias": "haitian",
        "title": "Haitian",
        "parents": [
            "caribbean"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "hakka",
        "title": "Hakka",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "HK",
            "PH",
            "CA",
            "SG",
            "TW",
            "MY"
        ]
    },
    {
        "alias": "halal",
        "title": "Halal",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "PT",
            "TR"
        ]
    },
    {
        "alias": "handrolls",
        "title": "Hand Rolls",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "BR"
        ]
    },
    {
        "alias": "hawaiian",
        "title": "Hawaiian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "AU",
            "DK",
            "CZ",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "hawkercentre",
        "title": "Hawker Centre",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "MX",
            "AR",
            "CL",
            "HK",
            "PH",
            "SG",
            "TW",
            "MY"
        ]
    },
    {
        "alias": "healthmarkets",
        "title": "Health Markets",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "henghwa",
        "title": "Henghwa",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "HK",
            "SG",
            "TW",
            "MY"
        ]
    },
    {
        "alias": "herbsandspices",
        "title": "Herbs & Spices",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "hessian",
        "title": "Hessian",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "heuriger",
        "title": "Heuriger",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AT"
        ]
    },
    {
        "alias": "himalayan",
        "title": "Himalayan/Nepalese",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "hkcafe",
        "title": "Hong Kong Style Cafe",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "HK",
            "TW",
            "US",
            "CA"
        ]
    },
    {
        "alias": "hokkien",
        "title": "Hokkien",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "HK",
            "SG",
            "TW",
            "MY"
        ]
    },
    {
        "alias": "homemadefood",
        "title": "Homemade Food",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "honduran",
        "title": "Honduran",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "JP",
            "TR"
        ]
    },
    {
        "alias": "honey",
        "title": "Honey",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "FI",
            "DE",
            "FR",
            "US",
            "IT",
            "PL",
            "SE",
            "TR"
        ]
    },
    {
        "alias": "horumon",
        "title": "Horumon",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "hotdog",
        "title": "Hot Dogs",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "hotdogs",
        "title": "Fast Food",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "hotpot",
        "title": "Hot Pot",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "JP",
            "US",
            "HK",
            "PH",
            "BR",
            "CA",
            "TW",
            "SG",
            "SE",
            "MY"
        ]
    },
    {
        "alias": "hunan",
        "title": "Hunan",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "HK",
            "FR",
            "SG",
            "TW",
            "MY"
        ]
    },
    {
        "alias": "hungarian",
        "title": "Hungarian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "iberian",
        "title": "Iberian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CA",
            "US",
            "PT"
        ]
    },
    {
        "alias": "icecream",
        "title": "Ice Cream & Frozen Yogurt",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "importedfood",
        "title": "Imported Food",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "indonesian",
        "title": "Indonesian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "MX",
            "ES"
        ]
    },
    {
        "alias": "indpak",
        "title": "Indian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "international",
        "title": "International",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "PH",
            "FI",
            "US",
            "IT",
            "MY",
            "TR"
        ]
    },
    {
        "alias": "internetcafe",
        "title": "Internet Cafes",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "intlgrocery",
        "title": "International Grocery",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "irish",
        "title": "Irish",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "island_pub",
        "title": "Island Pub",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "SE"
        ]
    },
    {
        "alias": "israeli",
        "title": "Israeli",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "CZ",
            "DE",
            "AT"
        ]
    },
    {
        "alias": "italian",
        "title": "Italian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "izakaya",
        "title": "Izakaya",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "JP",
            "US",
            "MX",
            "NZ",
            "HK",
            "AU",
            "BR",
            "SG",
            "TW"
        ]
    },
    {
        "alias": "jaliscan",
        "title": "Jaliscan",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "japacurry",
        "title": "Japanese Curry",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "HK",
            "JP",
            "US",
            "SG",
            "TW"
        ]
    },
    {
        "alias": "japanese",
        "title": "Japanese",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "jewish",
        "title": "Jewish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IT",
            "PL",
            "DE"
        ]
    },
    {
        "alias": "jpsweets",
        "title": "Japanese Sweets",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "juicebars",
        "title": "Juice Bars & Smoothies",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "kaiseki",
        "title": "Kaiseki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "kebab",
        "title": "Kebab",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "kiosk",
        "title": "Kiosk",
        "parents": [
            "shopping",
            "food"
        ],
        "country_blacklist": [
            "IE",
            "FR",
            "US",
            "GB",
            "NZ",
            "HK",
            "BR",
            "CA",
            "IT",
            "SG"
        ]
    },
    {
        "alias": "kombucha",
        "title": "Kombucha",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "kopitiam",
        "title": "Kopitiam",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "SG",
            "MY"
        ]
    },
    {
        "alias": "korean",
        "title": "Korean",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "kosher",
        "title": "Kosher",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "PT",
            "TR"
        ]
    },
    {
        "alias": "kurdish",
        "title": "Kurdish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "SE",
            "NO"
        ]
    },
    {
        "alias": "kushikatsu",
        "title": "Kushikatsu",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "lahmacun",
        "title": "Lahmacun",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "laos",
        "title": "Laos",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU"
        ]
    },
    {
        "alias": "laotian",
        "title": "Laotian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "latin",
        "title": "Latin American",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "lebanese",
        "title": "Lebanese",
        "parents": [
            "mideastern"
        ],
        "country_blacklist": [
            "HK",
            "AR",
            "JP"
        ]
    },
    {
        "alias": "ligurian",
        "title": "Ligurian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT",
            "FR"
        ]
    },
    {
        "alias": "lumbard",
        "title": "Lumbard",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "lyonnais",
        "title": "Lyonnais",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "BE"
        ]
    },
    {
        "alias": "macarons",
        "title": "Macarons",
        "parents": [
            "gourmet"
        ],
        "country_blacklist": [
            "PH",
            "IT",
            "MY"
        ]
    },
    {
        "alias": "madeira",
        "title": "Madeira",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "malaysian",
        "title": "Malaysian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "ES",
            "CZ",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "mamak",
        "title": "Mamak",
        "parents": [
            "malaysian"
        ],
        "country_whitelist": [
            "AU",
            "MY"
        ]
    },
    {
        "alias": "markets",
        "title": "Fruits & Veggies",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "mauritius",
        "title": "Mauritius",
        "parents": [
            "french"
        ],
        "country_blacklist": [
            "DE",
            "JP",
            "MX",
            "AR",
            "NZ",
            "CH",
            "CL",
            "AU",
            "DK",
            "BR",
            "AT",
            "PL",
            "NO",
            "TR"
        ]
    },
    {
        "alias": "meaderies",
        "title": "Meaderies",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "DE",
            "US",
            "MX",
            "AR",
            "CL",
            "CH",
            "AT",
            "ES",
            "PL"
        ]
    },
    {
        "alias": "meatballs",
        "title": "Meatballs",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "TR",
            "FR",
            "NL",
            "BE"
        ]
    },
    {
        "alias": "meats",
        "title": "Meat Shops",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "mediterranean",
        "title": "Mediterranean",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "mexican",
        "title": "Mexican",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "mideastern",
        "title": "Middle Eastern",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "BR"
        ]
    },
    {
        "alias": "milkbars",
        "title": "Milk Bars",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU",
            "PL"
        ]
    },
    {
        "alias": "milkshakebars",
        "title": "Milkshake Bars",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "GB"
        ]
    },
    {
        "alias": "minho",
        "title": "Minho",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "modern_australian",
        "title": "Modern Australian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU"
        ]
    },
    {
        "alias": "modern_european",
        "title": "Modern European",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "mongolian",
        "title": "Mongolian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "ES",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "moroccan",
        "title": "Moroccan",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "TR"
        ]
    },
    {
        "alias": "napoletana",
        "title": "Napoletana",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT",
            "FR",
            "CZ"
        ]
    },
    {
        "alias": "nasilemak",
        "title": "Nasi Lemak",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "SG",
            "MY"
        ]
    },
    {
        "alias": "newamerican",
        "title": "American (New)",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IE",
            "DK",
            "US",
            "GB",
            "NO",
            "SE"
        ]
    },
    {
        "alias": "newcanadian",
        "title": "Canadian (New)",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CA"
        ]
    },
    {
        "alias": "newmexican",
        "title": "New Mexican Cuisine",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "newzealand",
        "title": "New Zealand",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "NZ"
        ]
    },
    {
        "alias": "nicaraguan",
        "title": "Nicaraguan",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "AR",
            "CL"
        ]
    },
    {
        "alias": "nicois",
        "title": "Nicoise",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "nightfood",
        "title": "Night Food",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DK",
            "PL",
            "SE",
            "NO",
            "TR"
        ]
    },
    {
        "alias": "nikkei",
        "title": "Nikkei",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "BR",
            "ES",
            "MX",
            "AR",
            "CL"
        ]
    },
    {
        "alias": "noodles",
        "title": "Noodles",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CH",
            "DE",
            "FR",
            "AT"
        ]
    },
    {
        "alias": "norcinerie",
        "title": "Norcinerie",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "northeasternbrazilian",
        "title": "Northeastern Brazilian",
        "parents": [
            "brazilian"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "northernbrazilian",
        "title": "Northern Brazilian",
        "parents": [
            "brazilian"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "northerngerman",
        "title": "Northern German",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "northernmexican",
        "title": "Northern Mexican",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "norwegian",
        "title": "Traditional Norwegian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "NO"
        ]
    },
    {
        "alias": "nyonya",
        "title": "Nyonya",
        "parents": [
            "malaysian"
        ],
        "country_whitelist": [
            "AU",
            "MY"
        ]
    },
    {
        "alias": "oaxacan",
        "title": "Oaxacan",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "oden",
        "title": "Oden",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "okinawan",
        "title": "Okinawan",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "okonomiyaki",
        "title": "Okonomiyaki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "oliveoil",
        "title": "Olive Oil",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "BE",
            "FR",
            "DE",
            "AT",
            "US",
            "ES"
        ]
    },
    {
        "alias": "onigiri",
        "title": "Onigiri",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "opensandwiches",
        "title": "Open Sandwiches",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DK",
            "SE",
            "NO",
            "TR"
        ]
    },
    {
        "alias": "organic_stores",
        "title": "Organic Stores",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "oriental",
        "title": "Oriental",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "DE",
            "AT",
            "PL",
            "PT",
            "CH"
        ]
    },
    {
        "alias": "ottomancuisine",
        "title": "Ottoman Cuisine",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "oyakodon",
        "title": "Oyakodon",
        "parents": [
            "donburi"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "pakistani",
        "title": "Pakistani",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "palatine",
        "title": "Palatine",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "panasian",
        "title": "Pan Asian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "IT"
        ]
    },
    {
        "alias": "pancakes",
        "title": "Pancakes",
        "parents": [
            "breakfast_brunch"
        ]
    },
    {
        "alias": "panzerotti",
        "title": "Panzerotti",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "parma",
        "title": "Parma",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU"
        ]
    },
    {
        "alias": "pastashops",
        "title": "Pasta Shops",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "IE",
            "JP",
            "US",
            "AR",
            "GB",
            "NZ",
            "CL",
            "AU",
            "DK",
            "CZ",
            "NO",
            "BE",
            "IT",
            "SG",
            "NL"
        ]
    },
    {
        "alias": "pekinese",
        "title": "Pekinese",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "HK",
            "FR",
            "JP",
            "IT",
            "SG",
            "TW",
            "MY"
        ]
    },
    {
        "alias": "persian",
        "title": "Persian/Iranian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "peruvian",
        "title": "Peruvian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "SG",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "pfcomercial",
        "title": "PF/Comercial",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "BR"
        ]
    },
    {
        "alias": "piadina",
        "title": "Piadina",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "US",
            "IT"
        ]
    },
    {
        "alias": "piemonte",
        "title": "Piemonte",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT",
            "FR"
        ]
    },
    {
        "alias": "pierogis",
        "title": "Pierogis",
        "parents": [
            "polish"
        ],
        "country_whitelist": [
            "PL"
        ]
    },
    {
        "alias": "pita",
        "title": "Pita",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "pizza",
        "title": "Pizza",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "poke",
        "title": "Poke",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "US",
            "GB",
            "AU",
            "DK",
            "BR",
            "BE",
            "CA",
            "SG",
            "SE",
            "NO",
            "MY",
            "IE",
            "FR",
            "DE",
            "NZ",
            "PT",
            "CH",
            "PH",
            "AT",
            "PL",
            "NL"
        ]
    },
    {
        "alias": "polish",
        "title": "Polish",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "SG"
        ]
    },
    {
        "alias": "polynesian",
        "title": "Polynesian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "popcorn",
        "title": "Popcorn Shops",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "US",
            "GB",
            "JP"
        ]
    },
    {
        "alias": "popuprestaurants",
        "title": "Pop-Up Restaurants",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "US",
            "GB",
            "HK",
            "AU",
            "DK",
            "BE",
            "CA",
            "SG",
            "TW",
            "NO",
            "MY",
            "SE",
            "IE",
            "FR",
            "DE",
            "NZ",
            "PH",
            "NL"
        ]
    },
    {
        "alias": "portuguese",
        "title": "Portuguese",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "potatoes",
        "title": "Potatoes",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU",
            "CH",
            "DE",
            "AT"
        ]
    },
    {
        "alias": "poutineries",
        "title": "Poutineries",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "pretzels",
        "title": "Pretzels",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "US",
            "DE",
            "PT",
            "CH"
        ]
    },
    {
        "alias": "provencal",
        "title": "Provencal",
        "parents": [
            "french"
        ],
        "country_whitelist": [
            "FR"
        ]
    },
    {
        "alias": "pubfood",
        "title": "Pub Food",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU"
        ]
    },
    {
        "alias": "pueblan",
        "title": "Pueblan",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "puertorican",
        "title": "Puerto Rican",
        "parents": [
            "caribbean"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "ramen",
        "title": "Ramen",
        "parents": [
            "japanese"
        ]
    },
    {
        "alias": "raw_food",
        "title": "Live/Raw Food",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "reunion",
        "title": "Reunion",
        "parents": [
            "french"
        ],
        "country_blacklist": [
            "DE",
            "JP",
            "MX",
            "AR",
            "NZ",
            "CH",
            "CL",
            "AU",
            "DK",
            "BR",
            "AT",
            "PL",
            "NO",
            "TR"
        ]
    },
    {
        "alias": "rhinelandian",
        "title": "Rhinelandian",
        "parents": [
            "german"
        ],
        "country_whitelist": [
            "DE"
        ]
    },
    {
        "alias": "ribatejo",
        "title": "Ribatejo",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "riceshop",
        "title": "Rice",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "JP",
            "TR"
        ]
    },
    {
        "alias": "robatayaki",
        "title": "Robatayaki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "HK",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "rodizios",
        "title": "Rodizios",
        "parents": [
            "brazilian"
        ],
        "country_whitelist": [
            "AR",
            "BR",
            "PT"
        ]
    },
    {
        "alias": "roman",
        "title": "Roman",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT",
            "FR",
            "JP"
        ]
    },
    {
        "alias": "romanian",
        "title": "Romanian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "DE",
            "AT",
            "CH",
            "CZ",
            "BE",
            "ES",
            "PL"
        ]
    },
    {
        "alias": "rotisserie_chicken",
        "title": "Rotisserie Chicken",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "PL",
            "MX",
            "AR",
            "NZ",
            "PT",
            "CL",
            "AU",
            "BR",
            "BE",
            "IT",
            "ES",
            "NL"
        ]
    },
    {
        "alias": "russian",
        "title": "Russian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "salad",
        "title": "Salad",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "salumerie",
        "title": "Salumerie",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "IT",
            "ES",
            "MX",
            "AR",
            "PT",
            "CL"
        ]
    },
    {
        "alias": "salvadoran",
        "title": "Salvadoran",
        "parents": [
            "latin"
        ],
        "country_whitelist": [
            "CA",
            "US"
        ]
    },
    {
        "alias": "sandwiches",
        "title": "Sandwiches",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "sardinian",
        "title": "Sardinian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "US",
            "IT",
            "FR"
        ]
    },
    {
        "alias": "scandinavian",
        "title": "Scandinavian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "PT"
        ]
    },
    {
        "alias": "schnitzel",
        "title": "Schnitzel",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "DE",
            "PL",
            "AT"
        ]
    },
    {
        "alias": "scottish",
        "title": "Scottish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IE",
            "DE",
            "CA",
            "AT",
            "US",
            "GB",
            "CH"
        ]
    },
    {
        "alias": "seafood",
        "title": "Seafood",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "seafoodmarkets",
        "title": "Seafood Markets",
        "parents": [
            "gourmet"
        ]
    },
    {
        "alias": "senegalese",
        "title": "Senegalese",
        "parents": [
            "african"
        ],
        "country_whitelist": [
            "FR",
            "BE",
            "US",
            "IT",
            "CA"
        ]
    },
    {
        "alias": "serbocroatian",
        "title": "Serbo Croatian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "DE",
            "AT",
            "AR",
            "CL",
            "CH",
            "CZ",
            "BE",
            "IT",
            "PL",
            "SE"
        ]
    },
    {
        "alias": "shanghainese",
        "title": "Shanghainese",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "FR",
            "JP",
            "US",
            "HK",
            "AU",
            "BE",
            "TW",
            "IT",
            "SG",
            "SE",
            "MY"
        ]
    },
    {
        "alias": "shavedice",
        "title": "Shaved Ice",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "JP",
            "US",
            "MX",
            "AR",
            "CL",
            "CZ",
            "IT",
            "SG",
            "TW"
        ]
    },
    {
        "alias": "shavedsnow",
        "title": "Shaved Snow",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "HK",
            "US",
            "SG",
            "TW",
            "MY",
            "CA"
        ]
    },
    {
        "alias": "sicilian",
        "title": "Sicilian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "FR",
            "CZ",
            "US",
            "IT",
            "PL"
        ]
    },
    {
        "alias": "signature_cuisine",
        "title": "Signature Cuisine",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "MX",
            "AR",
            "PT",
            "CL",
            "DK",
            "ES",
            "SE",
            "NO"
        ]
    },
    {
        "alias": "singaporean",
        "title": "Singaporean",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "DK",
            "CZ",
            "ES",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "slovakian",
        "title": "Slovakian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IE",
            "FR",
            "US",
            "GB",
            "AU",
            "CZ",
            "BE",
            "CA",
            "IT",
            "PL"
        ]
    },
    {
        "alias": "smokehouse",
        "title": "Smokehouse",
        "parents": [
            "food"
        ],
        "country_blacklist": [
            "TR",
            "FR",
            "MX",
            "AR",
            "PL",
            "IT",
            "CL"
        ]
    },
    {
        "alias": "soba",
        "title": "Soba",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "somali",
        "title": "Somali",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DE",
            "AT",
            "US",
            "IT",
            "PL",
            "CH"
        ]
    },
    {
        "alias": "soulfood",
        "title": "Soul Food",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IE",
            "US",
            "PL",
            "GB",
            "NO",
            "CA",
            "ES",
            "SE",
            "NL"
        ]
    },
    {
        "alias": "soup",
        "title": "Soup",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "southafrican",
        "title": "South African",
        "parents": [
            "african"
        ],
        "country_whitelist": [
            "AU",
            "FR",
            "BE",
            "US",
            "IT",
            "CA"
        ]
    },
    {
        "alias": "southern",
        "title": "Southern",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IE",
            "US",
            "GB",
            "NZ",
            "CA",
            "PL",
            "SE",
            "NL",
            "TR"
        ]
    },
    {
        "alias": "spanish",
        "title": "Spanish",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "srilankan",
        "title": "Sri Lankan",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "CZ"
        ]
    },
    {
        "alias": "steak",
        "title": "Steakhouses",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "streetvendors",
        "title": "Street Vendors",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "sud_ouest",
        "title": "French Southwest",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "BE"
        ]
    },
    {
        "alias": "sugarshacks",
        "title": "Sugar Shacks",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "CA"
        ]
    },
    {
        "alias": "sukiyaki",
        "title": "Sukiyaki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "supperclubs",
        "title": "Supper Clubs",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CA",
            "ES",
            "GB",
            "US"
        ]
    },
    {
        "alias": "sushi",
        "title": "Sushi Bars",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "swabian",
        "title": "Swabian",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "CH",
            "DE",
            "AT"
        ]
    },
    {
        "alias": "swedish",
        "title": "Swedish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "SE"
        ]
    },
    {
        "alias": "swissfood",
        "title": "Swiss Food",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DE",
            "CZ",
            "ES",
            "MX",
            "AR",
            "CH",
            "CL"
        ]
    },
    {
        "alias": "syrian",
        "title": "Syrian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "szechuan",
        "title": "Szechuan",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "IE",
            "FR",
            "JP",
            "US",
            "GB",
            "NZ",
            "HK",
            "AU",
            "SG",
            "TW",
            "MY"
        ]
    },
    {
        "alias": "tabernas",
        "title": "Tabernas",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "ES",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "tacos",
        "title": "Tacos",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "US",
            "MX"
        ]
    },
    {
        "alias": "taiwanese",
        "title": "Taiwanese",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "FI",
            "CZ",
            "ES",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "taiyaki",
        "title": "Taiyaki",
        "parents": [
            "jpsweets"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "takoyaki",
        "title": "Takoyaki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "tamales",
        "title": "Tamales",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "tapas",
        "title": "Tapas Bars",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "AU",
            "FI",
            "SG"
        ]
    },
    {
        "alias": "tapasmallplates",
        "title": "Tapas/Small Plates",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "tavolacalda",
        "title": "Tavola Calda",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IT"
        ]
    },
    {
        "alias": "tea",
        "title": "Tea Rooms",
        "parents": [
            "food"
        ]
    },
    {
        "alias": "tempura",
        "title": "Tempura",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "SG",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "teochew",
        "title": "Teochew",
        "parents": [
            "chinese"
        ],
        "country_whitelist": [
            "HK",
            "SG",
            "TW",
            "MY"
        ]
    },
    {
        "alias": "teppanyaki",
        "title": "Teppanyaki",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "JP",
            "US",
            "MX",
            "NZ",
            "HK",
            "AU",
            "SG",
            "TW"
        ]
    },
    {
        "alias": "tex-mex",
        "title": "Tex-Mex",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "ES",
            "AU",
            "DK",
            "PT"
        ]
    },
    {
        "alias": "thai",
        "title": "Thai",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "themedcafes",
        "title": "Themed Cafes",
        "parents": [
            "cafes"
        ],
        "country_whitelist": [
            "FI",
            "JP",
            "US",
            "AR",
            "GB",
            "HK",
            "AU",
            "DK",
            "BE",
            "CA",
            "SG",
            "TW",
            "NO",
            "SE",
            "MY",
            "IE",
            "FR",
            "DE",
            "MX",
            "NZ",
            "CL",
            "CH",
            "PH",
            "AT",
            "PL",
            "NL"
        ]
    },
    {
        "alias": "tofu",
        "title": "Tofu Shops",
        "parents": [
            "gourmet"
        ],
        "country_whitelist": [
            "JP"
        ]
    },
    {
        "alias": "tonkatsu",
        "title": "Tonkatsu",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "SG",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "torshi",
        "title": "Torshi",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "tortillas",
        "title": "Tortillas",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "tradamerican",
        "title": "American (Traditional)",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "traditional_swedish",
        "title": "Traditional Swedish",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FI",
            "SE"
        ]
    },
    {
        "alias": "tras_os_montes",
        "title": "Tras-os-Montes",
        "parents": [
            "portuguese"
        ],
        "country_whitelist": [
            "PT"
        ]
    },
    {
        "alias": "trattorie",
        "title": "Trattorie",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "FR",
            "IT",
            "AR",
            "PL",
            "CH",
            "CL"
        ]
    },
    {
        "alias": "trinidadian",
        "title": "Trinidadian",
        "parents": [
            "caribbean"
        ],
        "country_whitelist": [
            "US"
        ]
    },
    {
        "alias": "turkish",
        "title": "Turkish",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "turkishravioli",
        "title": "Turkish Ravioli",
        "parents": [
            "turkish"
        ],
        "country_whitelist": [
            "TR"
        ]
    },
    {
        "alias": "tuscan",
        "title": "Tuscan",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "US",
            "IT",
            "FR"
        ]
    },
    {
        "alias": "udon",
        "title": "Udon",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "HK",
            "FI",
            "DK",
            "JP",
            "TW",
            "NO",
            "SE"
        ]
    },
    {
        "alias": "ukrainian",
        "title": "Ukrainian",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "ES",
            "DK",
            "TR"
        ]
    },
    {
        "alias": "unagi",
        "title": "Unagi",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "TW",
            "JP"
        ]
    },
    {
        "alias": "uzbek",
        "title": "Uzbek",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "US",
            "CZ"
        ]
    },
    {
        "alias": "vegan",
        "title": "Vegan",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "vegetarian",
        "title": "Vegetarian",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "venetian",
        "title": "Venetian",
        "parents": [
            "italian"
        ],
        "country_whitelist": [
            "IT",
            "FR"
        ]
    },
    {
        "alias": "venezuelan",
        "title": "Venezuelan",
        "parents": [
            "latin"
        ],
        "country_whitelist": [
            "ES",
            "FR",
            "CA",
            "US",
            "AR",
            "PT",
            "CL"
        ]
    },
    {
        "alias": "venison",
        "title": "Venison",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "IE",
            "SG",
            "GB",
            "NZ",
            "AU",
            "DK",
            "CZ",
            "CA",
            "IT",
            "PL",
            "NO"
        ]
    },
    {
        "alias": "vietnamese",
        "title": "Vietnamese",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "waffles",
        "title": "Waffles",
        "parents": [
            "restaurants"
        ]
    },
    {
        "alias": "waterstores",
        "title": "Water Stores",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "US",
            "MX",
            "BR",
            "CA"
        ]
    },
    {
        "alias": "westernjapanese",
        "title": "Western Style Japanese Food",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "SG",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "wineries",
        "title": "Wineries",
        "parents": [
            "arts",
            "food"
        ],
        "country_blacklist": [
            "FI"
        ]
    },
    {
        "alias": "winetastingroom",
        "title": "Wine Tasting Room",
        "parents": [
            "wineries"
        ]
    },
    {
        "alias": "wok",
        "title": "Wok",
        "parents": [
            "restaurants"
        ],
        "country_blacklist": [
            "IE",
            "SG",
            "JP",
            "US",
            "AR",
            "GB",
            "NZ",
            "HK",
            "AU",
            "BR",
            "CA",
            "IT",
            "PL",
            "TW",
            "TR"
        ]
    },
    {
        "alias": "wraps",
        "title": "Wraps",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "DK",
            "CZ",
            "US",
            "SE",
            "NO",
            "PT",
            "TR"
        ]
    },
    {
        "alias": "yakiniku",
        "title": "Yakiniku",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "SG",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "yakitori",
        "title": "Yakitori",
        "parents": [
            "japanese"
        ],
        "country_whitelist": [
            "SG",
            "TW",
            "JP"
        ]
    },
    {
        "alias": "yucatan",
        "title": "Yucatan",
        "parents": [
            "mexican"
        ],
        "country_whitelist": [
            "MX"
        ]
    },
    {
        "alias": "yugoslav",
        "title": "Yugoslav",
        "parents": [
            "restaurants"
        ],
        "country_whitelist": [
            "AU",
            "FR",
            "BE",
            "IT",
            "SE",
            "PT"
        ]
    },
    {
        "alias": "zapiekanka",
        "title": "Zapiekanka",
        "parents": [
            "food"
        ],
        "country_whitelist": [
            "PL"
        ]
    }
];


// Leaving this code here in case we need to use it again
// It takes an array of ALL yelp categories and filters it down to just the the relevant food and restaurant categories

// // Algorithm to find all categories that are children (direct or indirect) of "food" or "restaurants"
// // This is a recursive function that will call itself for each child category
// function findChildren(parent: String, categories: Category[]): Array<String> {
//     var children: Array<String> = [];
//     for (var i = 0; i < categories.length; i++) {
//         if (categories[i].parents.indexOf(parent) > -1) {
//             children.push(categories[i].alias);
//             children = children.concat(findChildren(categories[i].alias, categories));
//         }
//     }
//     return children;
// }

// // Find all children of "food" and "restaurants"
// var foodChildren = findChildren("food", allCategories);
// var restaurantChildren = findChildren("restaurants", allCategories);

// // Combine the two lists
// var foodAndRestaurantChildren = foodChildren.concat(restaurantChildren);

// // Use String array foodAndRestaurantChildren to get list of Category objects with those aliases
// var foodAndRestaurantCategories = allCategories.filter(function (category) {
//     return foodAndRestaurantChildren.indexOf(category.alias) > -1;
// });

// // Print out the list of Category objects
// console.log(JSON.stringify(foodAndRestaurantCategories));

// // Command line code to run this typescript file:
// // tsc categories.ts && node categories.js