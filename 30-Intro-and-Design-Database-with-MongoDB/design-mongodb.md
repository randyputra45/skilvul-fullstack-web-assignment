## Soal 1

Relationship: One-to-One (Embedding)

Data user aplikasi *Skiljek*:
- Full Name
- Email
- Phone Number

Schema:
```
{
    "_id": ObjectId('AAA'),
    "fullName": "Randy Christian Saputra",
    "email": "randy@mail.com",
    "phone": "081289102113"
}
```

## Soal 2

Relationship: One-to-Few (Embedding)

Data alamat user aplikasi *SkilShop*:
- Full Name
- Phone Number
- Adress (Max 2)

Schema:
```json
{
    "_id": ObjectId('AAA'),
    "fullName": "Randy Christian Saputra",
    "phone": "081289102113",
    "addresses": [
        {
            "street": "Jalan Soekarno Hatta",
            "postalCode": "83436",
            "city": "Surabaya"
        },
        {
            "street": "Jalan BJ Habibie",
            "postalCode": "37298",
            "city": "Malang"
        }
    ]
}
```

## Soal 3

Relationship: One-to-Many (Referencing)

Data product aplikasi *SkilShop*:
- Product
- Brand
- Variants (Many)

Product Schema
```json
// Product
{
    "_id": ObjectId('ZZZ'),
    "productName": "Kaos Polos",
    "brandName": "SkilShirt",
    "variants": [
        ObjectId('AAA'),
        ObjectId('BBB')
    ]
}
```

Variants Schema
```json
// Variants
{
    "_id": ObjectId('AAA'),
    "variantName": "Kaos Polos Hitam",
    "color": "Hitam",
    "quantity": "12",
    "price": "Rp. 99000"
},
{
    "_id": ObjectId('BBB'),
    "variantName": "Kaos Polos Navy",
    "color": "Navy",
    "quantity": "10",
    "price": "Rp. 99000"
}
```

## Soal 4

Relationship: Many-to-Many (Referencing)

Data cinema aplikasi *Skilflix*:
- Cinema (Many)
- Films (Many)
- Location

Films Schema:

```json
// Films
{
    "_id": ObjectId("FFF1"),
    "filmName": "Venom 2"
},
{
    "_id": ObjectId("FFF2"),
    "filmName": "Spiderman No Way Home"
}
```

Cinemas Schema:

```json
// Cinemas
{
    "_id": ObjectId("CCC1"),
    "cinemaName": "CFG",
    "films": [
        ObjectId("FFF1"),
        ObjectId("FFF2")
    ],
    "location": "Pondok Indah Mall"
},
{
    "_id": ObjectId("CCCC2"),
    "cinemaName": "Cinema31",
    "films": [
        ObjectId("FFF1"),
        ObjectId("FFF2")
    ],
    "location": "Mall Kelapa Gading"
}
```