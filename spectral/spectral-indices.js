/*
===========
MIT License
===========

Copyright (c) 2021 David Montero Loaiza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


=================
GitHub Repository
=================

spectral module: https://github.com/davemlz/spectral
Awesome Spectral Indices for GEE: https://github.com/davemlz/awesome-ee-spectral-indices
*/

/*
==========
Attributes
==========
*/

var spectralIndices = {
    "SpectralIndices": {
        "ARVI": {
            "bands": [
                "N",
                "R",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "(N - (R - (R - B))) / (N + (R - (R - B)))",
            "long_name": "Atmospherically Resistant Vegetation Index",
            "reference": "https://doi.org/10.1109/36.134076",
            "short_name": "ARVI",
            "type": "vegetation"
        },
        "ATSAVI": {
            "bands": [
                "sla",
                "N",
                "R",
                "slb"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "sla * (N - sla * R - slb) / (sla * N + R - sla * slb + 0.08 * (1 + sla ** 2.0))",
            "long_name": "Adjusted Transformed Soil-Adjusted Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(91)90009-U",
            "short_name": "ATSAVI",
            "type": "vegetation"
        },
        "BAI": {
            "bands": [
                "R",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "1.0 / ((0.1 - R) ** 2.0 + (0.06 - N) ** 2.0)",
            "long_name": "Burned Area Index",
            "reference": "https://digital.csic.es/bitstream/10261/6426/1/Martin_Isabel_Serie_Geografica.pdf",
            "short_name": "BAI",
            "type": "burn"
        },
        "BAIS2": {
            "bands": [
                "RE2",
                "RE3",
                "RE4",
                "R",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(1.0 - ((RE2 * RE3 * RE4) / R) ** 0.5) * (((S2 - RE4)/(S2 + RE4) ** 0.5) + 1.0)",
            "long_name": "Burned Area Index for Sentinel 2",
            "reference": "https://doi.org/10.3390/ecrs-2-05177",
            "short_name": "BAIS2",
            "type": "burn"
        },
        "BNDVI": {
            "bands": [
                "N",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - B)/(N + B)",
            "long_name": "Blue Normalized Difference Vegetation Index",
            "reference": "https://www.indexdatabase.de/db/i-single.php?id=135",
            "short_name": "BNDVI",
            "type": "vegetation"
        },
        "CIG": {
            "bands": [
                "N",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N / G) - 1.0",
            "long_name": "Chlorophyll Index Green",
            "reference": "https://doi.org/10.1078/0176-1617-00887",
            "short_name": "CIG",
            "type": "vegetation"
        },
        "CIRE": {
            "bands": [
                "N",
                "RE1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "(N / RE1) - 1",
            "long_name": "Chlorophyll Index Red Edge",
            "reference": "https://doi.org/10.1078/0176-1617-00887",
            "short_name": "CIRE",
            "type": "vegetation"
        },
        "CSIT": {
            "bands": [
                "N",
                "S2",
                "T1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "N / (S2 * T1 / 10000.0)",
            "long_name": "Char Soil Index Thermal",
            "reference": "https://doi.org/10.1080/01431160600954704",
            "short_name": "CSIT",
            "type": "burn"
        },
        "CVI": {
            "bands": [
                "N",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N * R) / (G ** 2.0)",
            "long_name": "Chlorophyll Vegetation Index",
            "reference": "https://www.cabdirect.org/cabdirect/abstract/20073176046",
            "short_name": "CVI",
            "type": "vegetation"
        },
        "DVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "N - R",
            "long_name": "Difference Vegetation Index",
            "reference": "https://doi.org/10.2307/1936256",
            "short_name": "DVI",
            "type": "vegetation"
        },
        "EVI": {
            "bands": [
                "g",
                "N",
                "R",
                "C1",
                "C2",
                "B",
                "L"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "g * (N - R) / (N + C1 * R - C2 * B + L)",
            "long_name": "Enhanced Vegetation Index",
            "reference": "https://doi.org/10.1016/S0034-4257(96)00112-5",
            "short_name": "EVI",
            "type": "vegetation"
        },
        "EVI2": {
            "bands": [
                "g",
                "N",
                "R",
                "L"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "g * (N - R) / (N + 2.4 * R + L)",
            "long_name": "Two-Band Enhanced Vegetation Index",
            "reference": "https://doi.org/10.1016/j.rse.2008.06.006",
            "short_name": "EVI2",
            "type": "vegetation"
        },
        "ExG": {
            "bands": [
                "G",
                "R",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "2 * G - R - B",
            "long_name": "Excess Green Index",
            "reference": "https://doi.org/10.13031/2013.27838",
            "short_name": "ExG",
            "type": "vegetation"
        },
        "GARI": {
            "bands": [
                "N",
                "G",
                "B",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - (G - (B - R))) / (N - (G + (B - R)))",
            "long_name": "Green Atmospherically Resistant Vegetation Index",
            "reference": "https://www.indexdatabase.de/db/i-single.php?id=363",
            "short_name": "GARI",
            "type": "vegetation"
        },
        "GBNDVI": {
            "bands": [
                "N",
                "G",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - (G + B))/(N + (G + B))",
            "long_name": "Green-Blue Normalized Difference Vegetation Index",
            "reference": "https://www.indexdatabase.de/db/i-single.php?id=186",
            "short_name": "GBNDVI",
            "type": "vegetation"
        },
        "GDVI": {
            "bands": [
                "N",
                "nexp",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "((N ** nexp) - (R ** nexp)) / ((N ** nexp) + (R ** nexp))",
            "long_name": "Generalized Difference Vegetation Index",
            "reference": "https://doi.org/10.3390/rs6021211",
            "short_name": "GDVI",
            "type": "vegetation"
        },
        "GEMI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "((2.0*((N ** 2.0)-(R ** 2.0)) + 1.5*N + 0.5*R)/(N + R + 0.5))*(1.0 - 0.25*((2.0 * ((N ** 2.0) - (R ** 2)) + 1.5 * N + 0.5 * R)/(N + R + 0.5)))-((R - 0.125)/(1 - R))",
            "long_name": "Global Environment Monitoring Index",
            "reference": "http://dx.doi.org/10.1007/bf00031911",
            "short_name": "GEMI",
            "type": "vegetation"
        },
        "GLI": {
            "bands": [
                "G",
                "R",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(2.0 * G - R - B) / (2.0 * G + R + B)",
            "long_name": "Green Leaf Index",
            "reference": "http://dx.doi.org/10.1080/10106040108542184",
            "short_name": "GLI",
            "type": "vegetation"
        },
        "GNDVI": {
            "bands": [
                "N",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - G)/(N + G)",
            "long_name": "Green Normalized Difference Vegetation Index",
            "reference": "https://doi.org/10.1016/S0034-4257(96)00072-7",
            "short_name": "GNDVI",
            "type": "vegetation"
        },
        "GRNDVI": {
            "bands": [
                "N",
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - (G + R))/(N + (G + R))",
            "long_name": "Green-Red Normalized Difference Vegetation Index",
            "reference": "https://www.indexdatabase.de/db/i-single.php?id=185",
            "short_name": "GRNDVI",
            "type": "vegetation"
        },
        "GVMI": {
            "bands": [
                "N",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "((N + 0.1) - (S2 + 0.02)) / ((N + 0.1) + (S2 + 0.02))",
            "long_name": "Global Vegetation Moisture Index",
            "reference": "https://doi.org/10.1016/S0034-4257(02)00037-8",
            "short_name": "GVMI",
            "type": "vegetation"
        },
        "MCARI": {
            "bands": [
                "RE1",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "((RE1 - R) - 0.2 * (RE1 - G)) * (RE1 / R)",
            "long_name": "Modified Chlorophyll Absorption in Reflectance Index",
            "reference": "http://dx.doi.org/10.1016/S0034-4257(00)00113-9",
            "short_name": "MCARI",
            "type": "vegetation"
        },
        "MCARI1": {
            "bands": [
                "N",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "1.2 * (2.5 * (N - R) - 1.3 * (N - G))",
            "long_name": "Modified Chlorophyll Absorption in Reflectance Index 1",
            "reference": "https://doi.org/10.1016/j.rse.2003.12.013",
            "short_name": "MCARI1",
            "type": "vegetation"
        },
        "MCARI2": {
            "bands": [
                "N",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(1.5 * (2.5 * (N - R) - 1.3 * (N - G))) / ((((2.0 * N + 1) ** 2) - (6.0 * N - 5 * (R ** 0.5)) - 0.5) ** 0.5)",
            "long_name": "Modified Chlorophyll Absorption in Reflectance Index 2",
            "reference": "https://doi.org/10.1016/j.rse.2003.12.013",
            "short_name": "MCARI2",
            "type": "vegetation"
        },
        "MGRVI": {
            "bands": [
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(G ** 2.0 - R ** 2.0) / (G ** 2.0 + R ** 2.0)",
            "long_name": "Modified Green Red Vegetation Index",
            "reference": "https://doi.org/10.1016/j.jag.2015.02.012",
            "short_name": "MGRVI",
            "type": "vegetation"
        },
        "MNDVI": {
            "bands": [
                "N",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - S2)/(N + S2)",
            "long_name": "Modified Normalized Difference Vegetation Index",
            "reference": "https://doi.org/10.1080/014311697216810",
            "short_name": "MNDVI",
            "type": "vegetation"
        },
        "MNDWI": {
            "bands": [
                "G",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(G - S1) / (G + S1)",
            "long_name": "Modified Normalized Difference Water Index",
            "reference": "https://doi.org/10.1080/01431160600589179",
            "short_name": "MNDWI",
            "type": "water"
        },
        "MNLI": {
            "bands": [
                "L",
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "(1 + L)*((N ** 2) - R)/((N ** 2) + R + L)",
            "long_name": "Modified Non-Linear Vegetation Index",
            "reference": "https://doi.org/10.1109/TGRS.2003.812910",
            "short_name": "MNLI",
            "type": "vegetation"
        },
        "MSAVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "0.5 * (2.0 * N + 1 - (((2 * N + 1) ** 2) - 8 * (N - R)) ** 0.5)",
            "long_name": "Modified Soil-Adjusted Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(94)90134-1",
            "short_name": "MSAVI",
            "type": "vegetation"
        },
        "MSR": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(N / R - 1) / ((N / R + 1) ** 0.5)",
            "long_name": "Modified Simple Ratio",
            "reference": "https://doi.org/10.1080/07038992.1996.10855178",
            "short_name": "MSR",
            "type": "vegetation"
        },
        "MTCI": {
            "bands": [
                "RE2",
                "RE1",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "(RE2 - RE1) / (RE1 - R)",
            "long_name": "MERIS Terrestrial Chlorophyll Index",
            "reference": "https://doi.org/10.1080/0143116042000274015",
            "short_name": "MTCI",
            "type": "vegetation"
        },
        "MTVI1": {
            "bands": [
                "N",
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "1.2 * (1.2 * (N - G) - 2.5 * (R - G))",
            "long_name": "Modified Triangular Vegetation Index 1",
            "reference": "https://doi.org/10.1016/j.rse.2003.12.013",
            "short_name": "MTVI1",
            "type": "vegetation"
        },
        "MTVI2": {
            "bands": [
                "N",
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(1.5 * (1.2 * (N - G) - 2.5 * (R - G))) / ((((2.0 * N + 1) ** 2) - (6.0 * N - 5 * (R ** 0.5)) - 0.5) ** 0.5)",
            "long_name": "Modified Triangular Vegetation Index 2",
            "reference": "https://doi.org/10.1016/j.rse.2003.12.013",
            "short_name": "MTVI2",
            "type": "vegetation"
        },
        "NBR": {
            "bands": [
                "N",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - S2) / (N + S2)",
            "long_name": "Normalized Burn Ratio",
            "reference": "https://www.indexdatabase.de/db/i-single.php?id=53",
            "short_name": "NBR",
            "type": "burn"
        },
        "NBRT": {
            "bands": [
                "N",
                "S2",
                "T1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - (S2 * T1 / 10000.0)) / (N + (S2 * T1 / 10000.0))",
            "long_name": "Normalized Burn Ratio Thermal",
            "reference": "https://doi.org/10.1080/01431160500239008",
            "short_name": "NBRT",
            "type": "burn"
        },
        "NDBI": {
            "bands": [
                "S1",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(S1 - N) / (S1 + N)",
            "long_name": "Normalized Difference Built-Up Index",
            "reference": "http://dx.doi.org/10.1080/01431160304987",
            "short_name": "NDBI",
            "type": "urban"
        },
        "NDDI": {
            "bands": [
                "N",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(((N - R)/(N + R)) - ((G - N)/(G + N)))/(((N - R)/(N + R)) + ((G - N)/(G + N)))",
            "long_name": "Normalized Difference Drought Index",
            "reference": "https://doi.org/10.1029/2006GL029127",
            "short_name": "NDDI",
            "type": "drought"
        },
        "NDREI": {
            "bands": [
                "N",
                "RE1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "(N - RE1) / (N + RE1)",
            "long_name": "Normalized Difference Red Edge Index",
            "reference": "https://doi.org/10.1016/1011-1344(93)06963-4",
            "short_name": "NDREI",
            "type": "vegetation"
        },
        "NDSI": {
            "bands": [
                "G",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(G - S1) / (G + S1)",
            "long_name": "Normalized Difference Snow Index",
            "reference": "https://doi.org/10.1109/IGARSS.1994.399618",
            "short_name": "NDSI",
            "type": "snow"
        },
        "NDVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - R)/(N + R)",
            "long_name": "Normalized Difference Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(79)90013-0",
            "short_name": "NDVI",
            "type": "vegetation"
        },
        "NDVIT": {
            "bands": [
                "N",
                "R",
                "T1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - (R * T1 / 10000.0))/(N + (R * T1 / 10000.0))",
            "long_name": "Normalized Difference Vegetation Index Thermal",
            "reference": "https://doi.org/10.1080/01431160600954704",
            "short_name": "NDVIT",
            "type": "burn"
        },
        "NDWI": {
            "bands": [
                "G",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(G - N) / (G + N)",
            "long_name": "Normalized Difference Water Index",
            "reference": "https://doi.org/10.1080/01431169608948714",
            "short_name": "NDWI",
            "type": "water"
        },
        "NGRDI": {
            "bands": [
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(G - R) / (G + R)",
            "long_name": "Normalized Green Red Difference Index",
            "reference": "https://doi.org/10.1016/0034-4257(79)90013-0",
            "short_name": "NGRDI",
            "type": "vegetation"
        },
        "NLI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "((N ** 2) - R)/((N ** 2) + R)",
            "long_name": "Non-Linear Vegetation Index",
            "reference": "https://doi.org/10.1080/02757259409532252",
            "short_name": "NLI",
            "type": "vegetation"
        },
        "NMDI": {
            "bands": [
                "N",
                "S1",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "(N - (S1 - S2))/(N + (S1 - S2))",
            "long_name": "Normalized Multi\u2010band Drought Index",
            "reference": "https://doi.org/10.1029/2007GL031021",
            "short_name": "NMDI",
            "type": "drought"
        },
        "OCVI": {
            "bands": [
                "N",
                "G",
                "R",
                "cexp"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "(N / G) * (R / G) ** cexp",
            "long_name": "Optimized Chlorophyll Vegetation Index",
            "reference": "http://dx.doi.org/10.1007/s11119-008-9075-z",
            "short_name": "OCVI",
            "type": "vegetation"
        },
        "OSAVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "(N - R) / (N + R + 0.16)",
            "long_name": "Optimized Soil-Adjusted Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(95)00186-7",
            "short_name": "OSAVI",
            "type": "vegetation"
        },
        "RDVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(N - R) / ((N + R) ** 0.5)",
            "long_name": "Renormalized Difference Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(94)00114-3",
            "short_name": "RDVI",
            "type": "vegetation"
        },
        "RVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "N / R",
            "long_name": "Ratio Vegetation Index",
            "reference": "https://doi.org/10.2134/agronj1968.00021962006000060016x",
            "short_name": "RVI",
            "type": "vegetation"
        },
        "SARVI": {
            "bands": [
                "L",
                "N",
                "R",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "(1 + L)*(N - (R - (R - B))) / (N + (R - (R - B)) + L)",
            "long_name": "Soil Adjusted and Atmospherically Resistant Vegetation Index",
            "reference": "https://doi.org/10.1109/36.134076",
            "short_name": "SARVI",
            "type": "vegetation"
        },
        "SAVI": {
            "bands": [
                "L",
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(1.0 + L) * (N - R) / (N + R + L)",
            "long_name": "Soil-Adjusted Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(88)90106-X",
            "short_name": "SAVI",
            "type": "vegetation"
        },
        "SAVI2": {
            "bands": [
                "N",
                "R",
                "slb",
                "sla"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "N / (R + (slb / sla))",
            "long_name": "Soil-Adjusted Vegetation Index 2",
            "reference": "https://doi.org/10.1080/01431169008955053",
            "short_name": "SAVI2",
            "type": "vegetation"
        },
        "SAVIT": {
            "bands": [
                "L",
                "N",
                "R",
                "T1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(1.0 + L) * (N - (R * T1 / 10000.0)) / (N + (R * T1 / 10000.0) + L)",
            "long_name": "Soil-Adjusted Vegetation Index Thermal",
            "reference": "https://doi.org/10.1080/01431160600954704",
            "short_name": "SAVIT",
            "type": "burn"
        },
        "SeLI": {
            "bands": [
                "RE4",
                "RE1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-08",
            "formula": "(RE4 - RE1) / (RE4 + RE1)",
            "long_name": "Sentinel-2 LAI Green Index",
            "reference": "https://doi.org/10.3390/s19040904",
            "short_name": "SeLI",
            "type": "vegetation"
        },
        "TCARI": {
            "bands": [
                "RE1",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "3 * ((RE1 - R) - 0.2 * (RE1 - G) * (RE1 / R))",
            "long_name": "Transformed Chlorophyll Absorption in Reflectance Index",
            "reference": "https://doi.org/10.1016/S0034-4257(02)00018-4",
            "short_name": "TCARI",
            "type": "vegetation"
        },
        "TCI": {
            "bands": [
                "RE1",
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "1.2 * (RE1 - G) - 1.5 * (R - G) * (RE1 / R) ** 0.5",
            "long_name": "Triangular Chlorophyll Index",
            "reference": "http://dx.doi.org/10.1109/TGRS.2007.904836",
            "short_name": "TCI",
            "type": "vegetation"
        },
        "TGI": {
            "bands": [
                "R",
                "G",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "- 0.5 * (190 * (R - G) - 120 * (R - B))",
            "long_name": "Triangular Greenness Index",
            "reference": "http://dx.doi.org/10.1016/j.jag.2012.07.020",
            "short_name": "TGI",
            "type": "vegetation"
        },
        "TSAVI": {
            "bands": [
                "sla",
                "N",
                "R",
                "slb"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "sla * (N - sla * R - slb) / (sla * N + R - sla * slb)",
            "long_name": "Transformed Soil-Adjusted Vegetation Index",
            "reference": "https://doi.org/10.1109/IGARSS.1989.576128",
            "short_name": "TSAVI",
            "type": "vegetation"
        },
        "TVI": {
            "bands": [
                "N",
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "0.5 * (120 * (N - G) - 200 * (R - G))",
            "long_name": "Triangular Vegetation Index",
            "reference": "http://dx.doi.org/10.1016/S0034-4257(00)00197-8",
            "short_name": "TVI",
            "type": "vegetation"
        },
        "VARI": {
            "bands": [
                "G",
                "R",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(G - R) / (G + R - B)",
            "long_name": "Visible Atmospherically Resistant Index",
            "reference": "https://doi.org/10.1016/S0034-4257(01)00289-9",
            "short_name": "VARI",
            "type": "vegetation"
        },
        "WDRVI": {
            "bands": [
                "alpha",
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(alpha * N - R) / (alpha * N + R)",
            "long_name": "Wide Dynamic Range Vegetation Index",
            "reference": "https://doi.org/10.1078/0176-1617-01176",
            "short_name": "WDRVI",
            "type": "vegetation"
        },
        "WDVI": {
            "bands": [
                "N",
                "sla",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "N - sla * R",
            "long_name": "Weighted Difference Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(89)90076-X",
            "short_name": "WDVI",
            "type": "vegetation"
        },
        "kEVI": {
            "bands": [
                "g",
                "kNN",
                "kNR",
                "C1",
                "C2",
                "kNB",
                "kNL"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-10",
            "formula": "g * (kNN - kNR) / (kNN + C1 * kNR - C2 * kNB + kNL)",
            "long_name": "Kernel Enhanced Vegetation Index",
            "reference": "https://doi.org/10.1126/sciadv.abc7447",
            "short_name": "kEVI",
            "type": "kernel"
        },
        "kNDVI": {
            "bands": [
                "kNN",
                "kNR"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(kNN - kNR)/(kNN + kNR)",
            "long_name": "Kernel Normalized Difference Vegetation Index",
            "reference": "https://doi.org/10.1126/sciadv.abc7447",
            "short_name": "kNDVI",
            "type": "kernel"
        },
        "kRVI": {
            "bands": [
                "kNN",
                "kNR"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "kNN / kNR",
            "long_name": "Kernel Ratio Vegetation Index",
            "reference": "https://doi.org/10.1126/sciadv.abc7447",
            "short_name": "kRVI",
            "type": "kernel"
        },
        "kVARI": {
            "bands": [
                "kGG",
                "kGR",
                "kGB"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-10",
            "formula": "(kGG - kGR) / (kGG + kGR - kGB)",
            "long_name": "Kernel Visible Atmospherically Resistant Index",
            "reference": "https://doi.org/10.1126/sciadv.abc7447",
            "short_name": "kVARI",
            "type": "kernel"
        }
    }
};

/*
=======
Exports
=======
*/

exports.indices = spectralIndices.SpectralIndices;