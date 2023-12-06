let cards = ["Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
"Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
"Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
"Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
"Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
"Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"]

cards = ["Card   1: 34 50 18 44 19 35 47 62 65 26 | 63  6 27 15 60  9 98  3 61 89 31 43 80 37 54 49 92 55  8  7 10 16 52 33 45",
"Card   2: 90 12 98 56 22 99 73 46  1 28 | 52 77 32  8 81 41 53 22 28 46 48 27 98  1 94 12 99 72 84 90 92 73 24 63 56",
"Card   3: 48 10 39 87 23 78 49 40 55  8 | 48 80 78 87 39 24 27 19 41 73 30 52 10  2 67 40 88 53 59 84 55 49  5 33 82",
"Card   4: 21 45 91 26 64 51 42 84 11 94 | 55 56 36 65 84  2 68 44 52 58 86  6 33  7 97 40 30 14 39 80 82 57 79  1 10",
"Card   5: 33  6 67 89 64 31 85 11  2 15 |  6 70 29 89 12 11 64 80  7 82 46 16 33 68 48 72 31  2 99 15 67 57  4 49 85",
"Card   6: 51 20 11 66 38 39 69 48 25 74 | 39 74  3 86 19 25 21 55  2 38 46 60 66 82 51 11 98 88  8 48 49 94 20 69 72",
"Card   7:  4 50 82 51 52 77 12 11 57 42 | 56 11 73 69 42 82 32 77 52 98 12 51 36 94 46  4 50 39 85 90 93 70 18 71 57",
"Card   8: 96 31 27 93  7  8  6 23 15 72 | 55 79 86  4  6 35 12 27 95 29 73 81 87 43  7 13 62 15 72 71 58 48 63 94 89",
"Card   9: 16 90 79 29 93 31 40 24 82 88 | 86 16 73 20 22 93 83 39 36 90 79 72 40 29 35 97 88 12  8 24 31 82 21 59 95",
"Card  10: 17 36 50 39 96 43 41 38 55  8 | 39 93 38 96 56 27  4 72 17 87 99 78 75 11 55 41 43 68 64 28 50 40  8 36 97",
"Card  11: 76 96 78 64 80 28 11 24 93 97 | 66 34 64 35 97 47 54 13 79 11 67 24 36 28 17 30 82 93 21 49  4 86 76 12  8",
"Card  12: 16 73 39 24 54 90 89 55 11 25 | 17 92  1 61 86  2 25  7 50 55 88 74 64 83 24 48 39 84 54 32 58 34 89 28 99",
"Card  13: 66 99 94 51 17 67 73 32 76 86 | 97 61 50 64 57 41 39 89 60 13 43 72 44 83 84 18 87 20 92 48 75  8 82 36 53",
"Card  14:  3 56 26 47 68 66 22 20 27 77 | 75 22 63 26 55 66  3 73 47 90 44 64 76  4 92 19 91 62 51 77 58 17  2 40 52",
"Card  15: 91  1 44  6 51 43 61  5 12 31 | 49 97 10 78 87 95 36 56 96 46  4 14 43 54 94 81 41 67 91 11 83 38 93 22 86",
"Card  16: 61 46 35 13 79 38 80  3 95 87 | 80 98 46 74 28 26 84 73 75 57 52 91 40 44  2 51 95 77  3 96 35 67 41 55 79",
"Card  17: 50 89 17 18 60 81 37 29  3 52 | 13 19 83 98 77 25 97 52 10 35 94 99 50  6 27 84 41 11 33 34 20  4 54 89 56",
"Card  18: 57  1 68  3 86 40 15  2 38 41 | 88 96 18 25 16 15 12 47 37 27 39 48 32 43 33 82 60 13 57 53 40 61 26 99  5",
"Card  19: 30 48  3 82 23 91 41 63 99 16 | 78  6 46 54 22 85  7 49 59 53 68 12 70 97 77 92 56 41 83  5 75 37 58 61 28",
"Card  20: 28  5 15 55 66 24 25 93  6 22 | 94 68  4  2 98 37 76 71 78 21 47 67 97 51 99  3 57 89 95 30 26 60 12  9 11",
"Card  21: 90 98 42 76 23 83  8 29  5 50 | 93 13 90 19 25 61 97 39 99 73 40 38  6 72 65 43 91 20 33 86 55 62 47  1 84",
"Card  22: 14 49 50  4  1 13 65 30 10 51 | 26 40 32 73 16 93 94 22 59 76 89 27 33 44 87 42 74  3 71 47 67  6 12 43 57",
"Card  23: 29 57 10 79 78 30 86 69 32 72 | 26  8 96 78 51 90 86 19  3 10 57 29 22 72 35 28 97 34 69 38 79 33 93 32 30",
"Card  24: 99 66 67 60 23 90 73  1 29 77 | 79 80 74 63 27 68 12 81 19 91 28 56 71 38 24 35 18  4 87 13 62  3 34 44 14",
"Card  25: 87  8 39 28  6 89 34 17 51 25 | 50 37 16 36 90 60 28 17 84 70 32 22 64 61  6 34 24 56 99 89 40 77 47 68 87",
"Card  26: 42 82 14 23 59  8 62 53 37  2 | 62  8 14 85 76 53 21 60 79  1 90 19 78 82 42 17 11 49 87 13 59 37 81  2 23",
"Card  27: 75 95 56 30 17 58 61 11 39 93 | 68 73 94  9 11 86 80 22 61 50 75 62 36 98 17 39 89 93 34 56 30 78 95 58 96",
"Card  28: 10 54 26 76  5 35 81 67 34 28 | 28 88 89 93 76 35 81 94 26 98 10 84 67  5 65 50 57 34 54 82  4 45 62 24 53",
"Card  29:  6 40 97 56  4 43 98 55 79 72 | 79 15 43 54 97  4 95 42 40 57 82 91 87 86 68 63 19  1 22 72  7 67 10 84 55",
"Card  30: 22 85  5 42 74 28  1 63 29 53 | 63 86 80 48 13  2 74 85 25 97  5 43 21 53 88  7 38 29 82  3 30 77 51 11 44",
"Card  31: 11 69 64 47 44 13 50 33 83 53 | 59  9 57 81 98 69 32 40 11 33 53 20 52 12 37 93 79 64 74 80 71 35 44  7 13",
"Card  32: 94 44 62 75 35 86 34 20  1 74 | 17 29 50 65 60 57 33 59 31 92 70 11 54 85 99 22 46 53 98 93 97 51 67 64 12",
"Card  33: 90 55 21  9 10 41 24 51 88 70 | 30 77 78 20 32  1 57 92 15 75 21 37 31 43 60 39 72 54 46 99 53 61 50 33 94",
"Card  34:  8 77 92 34 84 28 90 40 97 75 | 61 40 99 77 17 28 80 50 37 47 22 70 81 79 97 85 93 15 49 48 69 14  2 12 94",
"Card  35: 44 61 20 43 35 24 45 53 52 47 | 46 54 93 78 87 31 30 80 23 51 13 99 60 57 38  9  1 19 90 71 70 26 40 97 62",
"Card  36: 64 40  1 89 19 70 16 71 31 94 | 10 89 43  1 63 77  3 74 62 17 38 54 72 41 50 14 35 59 99 34 52 55 22 44 96",
"Card  37: 74 56 86 52 37 58 30 55 79  9 | 49 28 37 12 97 61 19 36 90 45 48 21 86 58 96 82  9 87 66 44 35 77 81 70 22",
"Card  38: 34 46 73 59 45 65 85 27 16 42 | 17 93 58 98 88 64 26 35  2 84 86 80 89  4 48 83 28 50 32 21 74 69 95 40 57",
"Card  39: 51 82 59 67 24  8 32 23 96 40 | 76 40 59 83 65 24  4 29 88 21 82 68 95 64 10  1 62 37 81 32 74 47 56 63 48",
"Card  40: 80 57 26  4 27 39 34 24 49 78 | 65 64 86 59 25 16 92 66 13 54 46 91 29 47 32 21 81 14 30  7 62 37 55 41 36",
"Card  41: 12 70 15 72 82 43 53 21 58 51 |  7 56  3 30 36 45 28 94 67 89 39  2 48 47 24 29 16 20 22 18 41 37 49 93 77",
"Card  42: 60 85 83  5 82 63 48 36  4 40 | 89 43 57 86 31 45 88 37 90  3 46 94 29 12 25 40 38 50 72  5  9 15 49 16 87",
"Card  43: 33 94 66 90 14 72 73 59 55 15 | 87 34 37 35  4 77 25 80 54 10 86  6 12 48 60 61 36 55 43 64 97 30 41  5 95",
"Card  44: 31 17 65 48 36 63 33 46 25 87 |  9 70  4 42 53 97 57 32 80 14 95 23  3 12 15 52  6 34 71 74 39 27 66 22 20",
"Card  45: 88 52 86 36  5 15 65 61 18 17 | 36 96 32 56  1 80 48 89 95 97 60 91 85 21 82 10  3 75 66 93 51 37 28 23 83",
"Card  46: 23 86 32 98 41 65 17 89 69 39 | 69  4 80 41 89 43 86 44 16 40 99  8 77 32 39 51 19 36 73 56 90 83  5 17 76",
"Card  47: 80 15 87 14  9 27 40 44 60  8 | 33 27 15 67 34  8 14 58 37 80 40 73 38 87 84 55 94 60  9 35 42 46  4 79 44",
"Card  48: 94 32 34 99 60 33 11  3 30 96 | 72 27 32 33 56 11 97 61 94 96 26 93 30 41 83 17  3 60 34  2 47 99 40 24 90",
"Card  49: 53 60 74 44 36 88 64 45  8 34 | 89 84 68 79 30 67 75 76 21 53 26 72 51 85 18 44  7 25 60 74 64 17 37 88 86",
"Card  50: 90 69 91  1 43 26 77 19 61 65 | 65 34 92 13 48 46 69 19 44 77 99 11 63 91 76 61 73 53  1 81 23 12 40 26 43",
"Card  51: 22 94 42 24 28 37 61 88 86 12 |  5 31  3 34 56 82 70 68 39 91 53 22 16 81 71 54 99 41 44 90 24 37 12 27 61",
"Card  52: 93 57 50  9 14 42 66 23 21  1 | 21 33 48 18 71  1 27 54 11 77 74 22 92 41 34 14 98 36 61 70 89 80 82 10 55",
"Card  53: 21 12  1 93 98 69 91  8  4 89 | 80  7  1 68 92 32 83 21 76 20 63 33 28 73 43 12 56  5 15 40 89 52 16 22  9",
"Card  54: 22 52 94  9 63 10 16  1 82  4 | 43 47 48 81 24 35  9 16 94 44 85 18 13 64 49 82 52 77 10 21 41 12 74 79 39",
"Card  55: 71 92 42 84 19 43 13 54  1 88 | 73 23 32 18 52 38 35 81 45 96 92 15 57 19 55 43 51 12  7 88 62 69 71  5 53",
"Card  56: 13 52 23 69 26 92 37 47 99 54 | 38 64 66 22 26 99 93 23 86  9 29 98 57 48 51 79 50 42 90 60 87 13 25  5  4",
"Card  57: 62  8 38 58  6 99 10 14 72 94 | 29 56 27 53 61 77 95 39 24 46 19 40 30 31  9 93 78 91 79 25 20  4 12 67 87",
"Card  58: 34 57 49  6 78 13 53 81 75 98 | 41 58 21 56 64  7 97 11 80  4 83 12 44 51 62 26  5 22 46 45 27 95 10 16 43",
"Card  59: 86 27 78 51 67 90 10 44 85 87 | 13 66 32 54 65 92 91 55 53 47  5 11 64 49 18 10  8 16 23  9 12 29 50 70 61",
"Card  60: 26 62 95 72 31 98 50  9 25 44 | 56 94  2 53 11 51 22 66 12 45 36 17 37 14 78 48  4 29 64 76 39 65  1 15 24",
"Card  61: 47 54 93 76 68 98 64 15 53 22 | 70 19 86  7 44 45  5 39 30 38  6 83 33 15  3 51 49 29 98 37 56 21 78 60 90",
"Card  62: 46 53 15 99 29  7 10 34 79 12 | 46 56 94 40 66 26 33 99 39 28 12 67 53 74 11 22 92 34 29 79  7 32 98 15 10",
"Card  63: 44  3 92  7 24 33 23 31 10 12 | 23  1 96 92 72 33 86  4 80 68 25 12 40 45 17 29 94 36 81 44 61 83 10 24 19",
"Card  64: 21 95 89 20  7 16 23 73 58 86 | 84 47 11 18 96 90 73  2 38 51 29 30 58 99 76 86 21  1 37 68 16 32 39 22 35",
"Card  65: 15 42 28 50 91 52 73 79 70 45 | 98 70 45 19  4 46 86 11 68 96 41 58 39  7 64 15 50 89 28 72 47 17 40 27 79",
"Card  66: 91 48 16  1 24  3 75 60 41 86 | 98 52 55 23 66 14 92 50 74 75  3  1 58 91 13 97 90 73 78 62 48 79 65 77 87",
"Card  67: 74 29 43 82 93 73 58 98  3  8 | 32 63 13 60 49 73 18 74 65 78 97 92 29 23 43  5 72 35 48 99  3 15 93 52 64",
"Card  68: 35 33 72 82 59  8 27 67 19 31 | 35 36 80  7 63 62 33 44 55 31  8 75  1 64 95 27 47 79 40 14 72 19 42 69 91",
"Card  69: 96 20 45 65 51 91 49 30 79 78 | 58 73 89 36 32 69 81 37 20 60 42 76 29 25 75 65 30 86 19 26 66 34 31 99  8",
"Card  70: 13 59 90  5 63 29 14 32 77 53 | 56 66 32 77 16 85 47 73 55 86  1 90 69 97  4 78 76 59 49  8 48 37 63 50 72",
"Card  71:  9 31 29  5 50 37 71 94 78 53 | 28 80 53 55 39 58 42 86 57 81 83 64 95 43 69 51 65 20 75 13 30 70 50 63  5",
"Card  72: 86 87 49 67 68 46 45 60 23 12 | 35 93 94  6 55 49 40 28 38 62 63 32 52 36 69 17 81 73 16  7 56 89 21 20 86",
"Card  73: 80 81 75 68 33 79 94 53  8 25 |  9 47 95 99 85 48 62 17 44 77 31 12  1 70 86 34 75 83 68 87 88 96 78  4 18",
"Card  74: 62 64 51 12 54  2 85 81 22 28 | 98 14 10 71  2 61 29 82 39 55 17 76 31 18 86 97 60 87 93 26 69 33 21 13  6",
"Card  75: 96 50 88  5 16 85  7 27 51 58 | 94 80 41 53 93 20 83 45 61 40 72 95 97 39 26 32 91 70 99  3 48 62 64 79 86",
"Card  76:  1 73 41 87 54 57 20  7 98 85 | 21 16 15 66 23 75 86 46 11 90 36 96 34 78 58 33 88 56 93 74  8 64 30 28  5",
"Card  77: 91 50 88  4 58 31 20  6 24 44 | 10 61 50 55 62 47 75 78 80 88 93  4 41 59 95 91 58 31 24 70 22 20  6 12 44",
"Card  78: 22 28 36 88 75 82  4 99 90 55 | 14 33 24 75 43  4 41 88 16 15 77 36 99 22 52 82 61 55 28 27 89 97 51 32 90",
"Card  79: 96  3 13 91 24 65 77  1 44 43 | 13 43 24 56  6  3 77 65 61  5 41 73 44 60 21 96 74 72 19 16  1 52 37 91 46",
"Card  80: 71 29 61 75 72 55 16 26  6 62 | 15 65 38 71 16 10 75 50  6 92  4 26 79 29 94 46 62 63 45 61 51 86 74 55 72",
"Card  81: 34 57 14 90 99 97 44 31 73 64 | 38 47 54 86 50  4 46 48 14 43 16 15 82 27 51  8 33 59 17 55 84 57 44 19 12",
"Card  82: 77 46 25 67 61  5 37 49 50 24 | 77 89  5  4 61 43 50 76 55 78 46  6 42 66 25 52 49  7 85 95 37 24 48 23 67",
"Card  83: 66 30 35 68 10 67 18 14 52 59 |  6 37 16 61 95 66 91 54 79 50 97 21  2 33 74 29 80 77  1 59 41 31 10 13  9",
"Card  84: 29 39 48  7  2 90 47 93 88 46 | 57 90 50 84 74 52  7 27 93 96 54 78 48 39 29 46 40 88 47 13  2 89 70 25 86",
"Card  85: 91 93 84 76  7  1 96 60 98 67 | 98 88 10 21 91 27 93 44  1 67 79  7 58 87 47 30 76 96 20 60  2 84 41 73 54",
"Card  86: 73  1 14 37 79 63 97 75  2 60 | 80  3 56 45 43 23  1 95 72 13 49 27  9 78 55 15 74 40 75 94 86 63 76 32 52",
"Card  87: 76 35 41  4 25 97 62 99 77 98 | 93 35 81 77 37 76 88 98 53 38  4 48 25 23 84 97  2 49 46 99 42  1 41 95 62",
"Card  88:  3 15 12 58 57  4 43 44 10 55 | 78 55 51 54  4 44 42 35 69  3 79 25 57 10 77 34 30 38 12 58 43 93 14 86 15",
"Card  89:  4 99 45 58 49 30 59 21 25 13 | 73 43 99 85 74 13 30 58 45 31 21 52 25 49 29  4  6 62 19 92 39 16 18 89 59",
"Card  90: 81 84  6 57  1 69  3 68 13 49 | 20 25 40 92 84 38 83 53 94 66 49 52 17 72 56  8 33 43 22 81 64 47 28 36  5",
"Card  91: 68 97 58 96 34 66 61 81 56 90 | 25 28 51 34 59 40 64 96 97 48 30 90 63 37 89 74 16 87 81  5  1 54 66 57 62",
"Card  92: 10 53 16 70 72 21 34  4 65 54 | 98 21 63 53 55 75 72 93  7 24 15 25 92 61 67 86 70 10 12 34 65 54  3  5 36",
"Card  93: 77 45 87 88 72 16 51 26 99 23 | 42 36 65 78 52 92  2 44  9 83 58 37 20 99 57 94  3 66 22 93 86 43  1 17 75",
"Card  94: 86 29  2 71 17 60 43  8 11 81 | 92 35 45 12 38 47 22  9 13 11 48 58 63 68 20 96 46 94 85 42 66 25 83 26 57",
"Card  95: 41 71 40 45  4 50 15 94 69 75 | 99 37 47 74 95 19  5 54 20 36 63 23  4 38 28 44  3 83 80 67 93 49 84  6 40",
"Card  96: 16 14 18 42 90 63 96 37 41 76 | 52 22 37 10 25 99 76 73 93 89  1 79 23 85  6 64 16 97 39 55 96 18 77 69 92",
"Card  97: 32 69 95 78 91 75 76 45 43 79 |  8 89 34 49 55 71  3 23 83  2 61 68 31 35 46 87 42 13 45 18 25 47 28 39 86",
"Card  98: 24 37 74 59 60 94 39 40 63 45 | 23 52  8 85 53 70 18 11 46 30  6 83 90 26 24 34 55 71 82 97 37 31 38 68  5",
"Card  99: 98  5 72 42 44 82 65 57 81 54 | 61 95 32  6 37 43 33 35 49 85 10 17 52 71 68 20 83 58 77 36 69 50 96 38 23",
"Card 100: 27 84 51 44 31 19 34 98 77 18 | 44 43 39  5 30 48 74 88 23 22  6 35 59  2 20 92 79 89 72 58 80 11 52 10 57",
"Card 101: 82 38 31  7 27  6 19 20  3 94 | 75 77 95 65 69 15 52 16 34 32 66  9 28 12 22 73 44 61 70 30 88 72 71 45 18",
"Card 102: 16 59 11  8 88  9 48  1 68 90 | 44 12 18 99 73 27 91 82 29 20 63  1 84 57 87 86  3 54 42 85 78 98 51 60 36",
"Card 103: 84 77 29 61 67 60 23 89 19 87 | 48  1 84  7 87 15 32 81 25 67 38 29 23 45  9 89 61 88 55 19 50 58  3 56 64",
"Card 104: 51  4 13 59 15 92 17 65 26 84 |  3 29 85  4 58 66 51 31  2 55 65 54 13 16 24 92 38 26 59 90 67 99 71 33 70",
"Card 105: 55 58 37 46 12 74 62 16 47 26 | 16 64 46 68 47 56 72 73  4 66 80 58 35 12 55 37 74 62 26 60 69 75 13 63 33",
"Card 106: 39 80 37 10 26 47 66 79 12 64 | 34 82 72 10 12 20 40  7 39 25 89  9 26 93  5  1 47 64 79 96 66 18 80 37 13",
"Card 107: 95 28 45 60 91 73 11 23 26 94 | 16 26  8 58 83 90 31 44 80 50 30 11 97 70 89 37 60 38 41 69 55 99 28 65 45",
"Card 108: 39 54 74 12 56 63 13 34 32 40 | 88 70 89 74 87 96 44 58  2 79 34 37 63 16 30 61 41 23 54 95 33 72 73 40 82",
"Card 109: 98 96 81 13 69  5 73 50 76 47 | 20 49 30 80 76 50 31 81 66 74  3 86 12 73  5 64 47 34 15  9 25 13 24 96 79",
"Card 110: 47 43  1 83 76 38 30 45 50 12 | 56 99 38 43 74 68 27 83 55 49 48 78 91 41 51 72 33 76 15 12 22 50 53 26 13",
"Card 111: 51 68  7 71 30 79 14 26 59 66 | 11 16 79 30 26  7 27 18 53 45 68 76 15 87 77 92 57 62 71 14 10 59 66 78 91",
"Card 112: 84 37 54 21 19 30 38 20 94 88 | 40 19 38 21 68 62 48 26 44 12 91 74 20 30 42 89 98 51  7 54 37 58  1 88 64",
"Card 113: 91 41 56 30 18 47 74 45 17  9 | 87 77 68 93 88 56  2  1 69 41 36  9 47 33 13 44 18 25 70 86 45  8 32 91 46",
"Card 114: 83 62  7 35 48 11 37 69 93 84 | 90 24 81 74 17 54 49 65 67 19 55 47 43 14 64 99 33 28 29 98 36 63 57 52 58",
"Card 115: 44 84 39 20 33 59 31 34  8 95 | 31 81 39  7 16 92 35 53 11 97 59 78 10 80 91 62 54 29 65  3 75 47 26 24 63",
"Card 116: 65 74 70 33 44 56 13 10 85 63 | 11 20 54 17 73 41 24 79 18 92 43 76 88 39 95 80  7 75 36 52 94 35 78 31  4",
"Card 117: 34 82 96 60 48 66  6 37 14 98 | 89 64  6 95 11 54 66 17 45 10 83 98 63 15  1 55 52 68 60 94 79 22 85 57 39",
"Card 118: 20 80 46 41 97 57 99 56 64 91 | 48 61 98 11 95 50 62 81 10 79 22 32 37 71 43 19 36 58 29  9 16 64 65 17 96",
"Card 119: 96 42 71 23 45 73 84 94 51 77 | 68 35 22 56 81 54 47  3 77 50 73 51 90 29 82  4 52  8 66 76 15 92 65 24 14",
"Card 120: 56 34 70 85 68 77 79 94 84 73 |  1 82 60 23 78 10 58 29 26 70 93  2 88 87  4 33 44 69 47 12 48  6 54 41 96",
"Card 121: 60 85 78 83 68 26 62 65 91 69 | 97 63 12  4  9 46  5 10 52 99 24 74 40 95 35 79 23 39 45 17 38 85 59 69 89",
"Card 122: 48 51 12 57 61 41 98 22 11 37 | 27 24 95 81 20 73 92 31 32 68  6 63 38 40 83 56 96 62 99  7 30 11 85 75 46",
"Card 123: 47 62 78 39 69 77  2 43 83 36 | 28 89 49 13 40 70 22 16 23 19 57 61 14 51 44 53 91 50 64 66 33 18  8 15 79",
"Card 124: 22 28 12 21 40 57 84  5 87 46 | 67 46 31 64 58 22 76 75 37 82 70 21 87 69 13  3 12  5 84 28 14 57 95 61 40",
"Card 125: 54 74 63 95 39 93 11 81 24 69 | 39 67 71 19 81 84 53 66 51 74 40 63 17 49 95  3 44 11  9 72 91 24 54 56 86",
"Card 126: 49 98 17 94 19 37 69  1 40 20 | 19 90 77 21 94 96 98 34 49 15 28 76 71 22 83 37  1 69 53 12 31 40 17 42 20",
"Card 127: 97 45 16 74 87 96 76 60 29  3 | 87  2 45 66 29 17 72 22 15 74 54 38  3 37 60 76 97 62 49 96 61 51  5 16 25",
"Card 128: 19 79 62 95 67 59 77  5 70 98 | 56 70 21 85 18 68 88 98 79 95  5 83 16 77 91 63 90 19 84 76 37 59 62 67 44",
"Card 129: 94 73 69 51 30 98  1 65 11 45 | 71  5 44  7 52 79 61 99 11 25 10  8 78 33 57 51 75 20 77  9  6 91  4 46 12",
"Card 130: 26 98  8 44 84  7 29 47 70 24 | 13 54 48  6 45 78 83 28 10  2 29 71 16 44 62 89 24 53 46 67 20 43 84 91 88",
"Card 131: 41 27 22  4 39 82 84 68 29 85 | 22 85 16 24 44 25 41 46 23 39 88  9 82 51 90 64 13 80 74 15  4 78 91 94 93",
"Card 132: 32 46 49 99 77 63 37 18 54 80 | 59 65 42 55 47 18  6 32  9 37 85 52 30 94 72 13 77 97 22 46 26 99 90 92 17",
"Card 133: 70 72 53 32 24 71 17 27 39 67 |  9 87 57 49 90 81 40 28 37  8 67 51 18 65 99 16  3 31 73 12 91 44 55 70 60",
"Card 134: 10 65 66  5 88 67 83 75 52 33 | 90 37 65  2 52 69 34  4 45 72 15  1 44 96 94 36 35 76  5 56 63 79 20 12 75",
"Card 135: 71 54 43 41 34 29 16 88 77 44 |  9 33 48 82 52 74 28 10 22 42 15 47 27  5  7 23 56 55 94 49 63 72 61 78 46",
"Card 136: 10 97  3 82 73 87 95 80 35 63 | 20 63 50 79 52 77  2 38 84 83 59 74 51 26  5 46  9 49 19  8 13 36 15  7 23",
"Card 137: 97 53 91 22 90 12 93 23  3 86 | 96 82 24 21 30 51 65 44 50 31 71 34 54 38 36 88 94 48 32 83 99 84 74 27 33",
"Card 138:  8 97 59 46 75 32 65 82 40 44 |  5 81 19 36 54  2 14 39 20 76  3 68 46 50 47 15 96 89 95 41 37 22 99 40 58",
"Card 139: 66 97 45 10 72 63 29 43 84  9 | 61  3 74 56 58  4 15  6 68 55 20 23 80 47 83 44 91 19 31 50 54 73 93 45 53",
"Card 140:  1  9 81 51  8 90 35 61 82 27 | 55 49 88 60  7 93 46 96 70 75 18 37 41 52 36 78 77 80  5 31 76 79 65 99 20",
"Card 141: 93  8 76 47 31 92 18 23 29 34 | 95 67 73 27  9 98 85 70 96 36 87 89 52 63 65 78 37 24  3 90  2 97 19 93 51",
"Card 142: 34 71 94  2 79 18 69 89 44 19 |  3 10  9 62 71 44 37 32 97 85  2 89 48  6 14 95 17 91  5 99 11 33 41 39 22",
"Card 143:  1 91 47 65 14 42 96 12 52  6 | 70 47 45  3  2 54 52 42 65 25 16 38 91 57 72 96 90 36 34 14 79 78  1 39 76",
"Card 144: 32  9 19 63 16  5 81  1  2 49 | 90 19 52 28 23 75 34 57 70 81  1 36 26  2 32 27 63 43 16  4 49 99  9 21  5",
"Card 145: 11 45 95  1 92 20 34 49 70 28 | 66 27 57 51 23 24 81 69 56 80 55 89  1 47 95 32  7  5 14 92 99 73 20 84 65",
"Card 146: 29 84 70 31 61 77 47 89 96 63 | 32 96 52 23 73 79 47 66 67 46 31 26  8 82 15 29 89 84 77 72 11  1 63 97 27",
"Card 147: 90 51 66 50 32 47 39 20 24 46 | 82 49 76 79 57  9 94 84 80 97 51  4 35 83 63 50 69 72 20 58 31 93  7 24 62",
"Card 148: 50 53 44 71 81 41 31 57 88  2 | 41  2 68 51 53 37 25 65 34 24 50 98 95 76 88 69 82 42 81 58 31 11 77 33 21",
"Card 149: 54 32 10 37 35  3 64  4 34 14 | 77 80 53  7  4 29 12 33 69 35 40 32 11 44 83 15 34  2 54 48 30 46 84 14 81",
"Card 150: 68 41 72 13 84 60 20 54  6 90 | 56 54 65 25  5 32 39 34 26 63 16 86 75 92 95 28 78 62 24  8 48 98 83 69 57",
"Card 151: 61 48  8 19 95 28 56 34 68 72 | 96 73 69 11 10 29 91 44 28 39 49 34 17 35 19 90 82 61 40 86 95 31 33 81 46",
"Card 152: 24 65 90 26 97 95 55 68 54 96 | 30 43 70 47 92 96 68 74 26 73 77 97  8 90 86 54 69 17 79 55 16 78  7 38  6",
"Card 153:  8 61 75 62 12 30 66 64 97  6 | 63 70 81 41 47 85 76 11 90 58 45 39 95 97 22 34 78 82 86  7 99 18 35 31 29",
"Card 154: 42  2 81 53 80 36 62 64 89 49 | 99 80 49 84 24 91 93 70 88 30 19 47 79 32 33 18 62 25  8 60 28 92 14 89 42",
"Card 155: 30 76 60 19 12 49 63 33 77 90 | 91 22 96  4 76 47  8 64 58 40 27 49 52 19 63 15 43 73 97 83 61 80 65 34  9",
"Card 156: 75 23 40 88 39 96  9 36 21 51 | 39 70 67  1 92 62 57  5 27 87 78 81 51 28 63 23 56  2 93 84 75 21 29 97 20",
"Card 157: 95 86  3 18 98 85 31 22 71 79 |  6  8 89 88  7 38 39 18 15 40 22 96 87 55 90 80 36  9 20 83  1 34 49 73 98",
"Card 158: 31 36 87 28 57 21 64 35 55  5 | 96  2 78 38 62 32 40 75 14 43 65 71 70 74 61 87 86  1 80 47 23 27 45 67 42",
"Card 159: 52 31 14 72 16 90 94 45 88 29 | 64 87 46 77 51 74 40  5 16 92 95 82 12  6 38 35 72 98 89 11 84 97 99 57 93",
"Card 160: 69 51 53 88 58 54 27 48 78  4 | 70 87 72 32 33 23 94 83 10 73 76 19 91 68 80 89 34 64 58 13 98  5 78 75 52",
"Card 161: 68 34 80 98 81 36 19 61 79 40 | 50 74 25 29 57 12 73 42 83  8 86 30 66 55 20 17 49 84 82 41 46 97 71 23 44",
"Card 162: 94 12 32 66 57 67 97 39 65  7 | 71 23 76 47 49  9 86 58 50 78 88 15 90 43 54 27 37 81 75 13 34 64 87  2 40",
"Card 163: 57 72 66 78 45 23 76  2 24 81 | 58 17 19 44  5  3  2 57 39 82 88 24 47  8 90 31 66 92 68 45 72 78 81 76 23",
"Card 164: 22 57 61 52 83 80 99 37 39 36 | 80 23 67 54 43 99 83 28 37 13  3 55 91 52 51 98 82 27 21 61 22 36 85 57 39",
"Card 165: 62 81  8 72 15 53 36 98 51 22 | 76  6 26 73 65 98 36 72 33 97  5 81 53 69 22 15 14 44 11  8 51 62 13 45 20",
"Card 166: 28 33 40 30 17 74 81  2 88 62 |  4 79 81 96 93 48 62 39 40 78 33 75 26 29 37 30  2 17 31 28 15 88 97 72 74",
"Card 167: 16  1 46 98 76 85 35 91 21 18 | 21 82 94 95 87 66 89 30 64 10 33 93 23 29 34 47 96 20 77 83 81 75 88 46 49",
"Card 168: 50 86 74 64 85 75 80 21  5 46 | 85 74 50 64 96 51 49 55 48 72  5 14  3 39 92 54 46 38 21 86 33 97 61 75 15",
"Card 169: 51 49 66 48 30 10 32 67 60 69 | 42 32 67 43 62 66 10 38 37 60 51 48  9 29 16 49 74 25 36 91 24 69 81 17 30",
"Card 170: 17 24 18 73 64 60 56 38 80  8 | 94 45 30 39 71 12 88 89 61  2 23 40  9 48 42 52 28 96 59 95 19 72 36 81 25",
"Card 171: 38 32 75 85 98 11 17 57 89 56 | 52 57 75 85 32 61 38 98  3 16 60 50 56 34 26 89 77 11 17 49 81  9 20  8  1",
"Card 172:  1 30 98 25 63 39 29 17 58 40 | 98  6 30 85 27 25 69 17 93 47 29 31 63  5 23 56 87  7 91 39 35 58 59 22 38",
"Card 173: 88 59  3 87 21 91 24  4 82 48 | 97 53 67 73 28 66 45 27 36 88 64 99 92 24 26 87 72 96 84 59 85 68 82 49 10",
"Card 174: 56 79 60  1 77 37 83  9 30 92 |  2 15 71 79 60 31 32 58 34 74 42  1 18  5 38 83 97 12 92 86 56 95 19 85 98",
"Card 175:  2 50 25 89 41 75 94 78 95 17 | 72 81 28 48 55 17 69 66 40 91 78 32 27  2 95 13 50 80 15  3 49 94 90 85 25",
"Card 176: 51 22 14 16  1 62 64 84 12 25 | 22 34 91 76 62 38 88 78 35 95 51 45 12 92 61 28 81 16 36 14  8 66  9 10 56",
"Card 177: 83 47 79 45 75 15 44 52 11 88 | 26  5 59 93 83 88 79 44  4 28 32 86 52 89 56 47 97 48 80 15  3 40 98 18 33",
"Card 178: 87 42 52 70 32  7 39  6  9 17 | 17  9  5 45 52  4 70 72 27  3 78 24 50 39 94 87 47 14 42  6 44 95 85 88  7",
"Card 179: 79 87 75 44 93  9 71 16 11  5 | 44 37 11 92 59 50 13 91 36 45 87 77 99 31 68 94  9 62 71 38  8 16 42 55  5",
"Card 180: 18 98 61 58 87 41 51 37 28 79 | 65 32 36 92 49 45 10 93 40  4 67 76 55 42 88 30 75 44 23 71 98 51 14 78 24",
"Card 181:  7 17 80 68 38 36 86 59 75 96 | 68 64 54  8 12  6 88 45 80 98 51 60 53 22 75 50 34 77 29 38 24  9 48 70 36",
"Card 182:  9 57 37 30 78 31 18 40 49 32 | 11 57 40 50 68 22 18 36 74 91 29 52 70 81 75 69 38  7 26 24 33 55  5 34 95",
"Card 183: 36 15 99 95 83 87 22 80 59 31 | 61 99 31 20 55 57 89 34 26 72 39 67  4 22  2 91 24 83 56 44 14 81 49 10 12",
"Card 184: 70 55 77  4 95 51 10 13 75 27 | 70 38 97 88 85 24 48 67 69 89 13 49 28 60 71 10 93 72 84 15 57 98 33 16 20",
"Card 185: 32 53 24 75 26 20 94  4 73 57 | 80 22  1 10  4 71 16 44 87 35 19 72 47 40 59 36 58  2  8 43 23 46 37 34 12",
"Card 186: 93 84 73 24  6 37 72 41 55 75 | 36 71 80 32  2 68 58 47 33  6 70 10 78 19 44 82 39 90 54 91 88 20 28 64 87",
"Card 187: 62 23 40 15 57 69 94 64 60 85 | 63 26 36  8 90 42 58 73 30 28 32 18 50 48 54 88 72 86 13 37 22  5 87 79 77",
"Card 188: 84 42 64  5 88 96 45 91 66 25 | 91 32 93 75 25  2 73 85 88 33 66 58 45 53 28 42 57 40 39 24  5 84 96 78 67",
"Card 189: 59 99 36  6 34 46 98 29 69 53 | 52 17 67 11 98 25 41 34 59 69 46 99 72 92 80 14 26  1 51 76 33 95 36  6 29",
"Card 190: 75  5 85 72 81 96  7 74 21 39 | 32 44  7 87 42 72 86  4 71 81 95 84 85 33 75 78 74 76 96 21 37 58 10 64 73",
"Card 191: 28 83 55 46 56 85 78 21 47 37 | 46 47 82 21 57 29 54 59 78 39 30 33 89 48 83 55 28 85 94 24 72 96 37 56  9",
"Card 192: 72 91 29 35  2 42 71 24 82 55 | 49 29 84 40 69 85 24 48  3 42 61  9 63 37 41 79 11 20 72 14 80 71 16 38 82",
"Card 193: 61 88 76 45 71 29 84 78 81 83 | 85 63 56  2 49 92 47 30 71 43 38 76 60 88 81 84 98 94  8  6 51 58 42 70 61",
"Card 194: 28 18 61 86 27 79 32 48 58 96 | 13 20 95 38 63 46 51 78 90  3 80 15 72 76 88 77 69 24  6 35 28 62  5 36 65",
"Card 195: 96 89 40 50 26 36 86 75 62 10 |  6  5 69 72 82 45  3 33 86 71 97 34 36 91 42 20 80 93 40 35 96 89 17 31 50",
"Card 196: 45 11 82 74 51 55 19 43 24 94 | 63 14 22 75 94 29 19 39 13  8 82 32 76 41 53 43 54 91 11 17 62 21 71 42 86",
"Card 197: 20 64 71  4 50 90 49 17  8  6 | 65 92  6 60 94 54 56 33 80 75 69 15 49 71 26 81 67 37 74 11 20 25 43 85 19",
"Card 198: 28 11 15 25 97  2 22 31 29 73 | 14 35 15 87 81 54 49  2 20 79 44 96 38 94 55 97 17 86 65 46 32 21 67 58 27",
"Card 199: 50 83  4 30 82 92 76 11 55 19 | 47 50 57 53  5 14 28 85 46 88 94 51 13 38  3 89 66 45 87 24 31 96 69 73 44",
"Card 200: 55 23 78 25 87 33 36 80 79 38 | 99 30 52  4 85 95 66 26 28 91 20 45 72 68  8 35 92 86 93 43 65 97 14 50 44",
"Card 201: 33 75 55 46 25 63 76 37  1 73 | 68 64 22 99 12 56 43 28 44 80 91 65 78 27 71 32 95 29 59 36 45 60 77 62 82",
"Card 202: 66 29 75 28 68 42 98 21 82 99 | 23 92 38 44 45 12  6  4 17 64 67 60 36 79 46 58 14 73 71 72 81 49 13  2 30"];



cards.map(v=> v.split(":")[1].split("|").map(v=>v.trim().split(/\s+/)))
.map(v=> v[1].filter(n=>v[0].indexOf(n) != -1) )
.map(v=> v.length > 0 ? Math.pow(2,v.length-1) : 0 )
.reduce((p,c)=>p+c,0)
