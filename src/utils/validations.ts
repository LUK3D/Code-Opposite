export const ValidationRules = [
    {
        image: null,
        label:"Number/Formula/Price",
        value:"regex",
        description: "numeric"
    }
    ,{
        image: null,
        label:"Email",
        value:"regex",
        description: "email"

    }
    ,{
        image: null,
        label:"Website",
        value:"regex",
        description: "URL (web page/must start with http://)"

    }
    ,{
        image: null,
        label:"Date",
        value:"regex",
        description: "mm/dd/yyyy"

    }
    ,{
        image: null,
        label:"Time",
        value:"regex",
        description: "hh/mm"

    }
    ,{
        image: null,
        label:"Phone",
        value:"regex",
        description: "numeric (3-3-4)"

    }
    ,{
        image: null,
        label:"alpha",
        value:"regex",
        description: "only letters"

    }
    ,{
        image: null,
        label:"numeric",
        value:"regex",
        description: "only digits"

    }
    ,{
        image: null,
        label:"alpha numeric",
        value:"regex",
        description: "letters and digits"

    }
    ,{
        image: null,
        label:"alpha space",
        value:"regex",
        description: "letters and white spaces"

    }
    ,{
        image: null,
        label:"alpha numeric space",
        value:"regex",
        description: "letters, digits, and white spaces"

    }
    ,{
        image: null,
        label:"full name",
        value:"regex",
        description: "e.g. John Doe – the value must contain at least one space character"

    }
    ,{
        image: null,
        label:"regular expression",
        value:"regex",
        description: "add a regex code to define your own validation code"

    }
]