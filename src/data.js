var APP_JSON_DATA = {
    "root": {
        "common": {
            "templateType": "DND_PAIRING_IMAGE_IMAGE",
            "templateId": "SQE8",
            "title": "Image Pairing",
            "parentBackgroundColor": "rgba(0,0,0,0)",
            "isHeaderAvailable": true,
            "isHomeScreenAvailable": true,
            "isResultScreenAvailable": true,
            "isQuestionSoundAvailable": true,
            "isHeaderMusicAvailable": true,
            "isHeaderHomeAvailable": true,
            "isHeaderFullScreenAvailable": true,
            "isHeaderInsAvailable": true,
            "difficultyLevel": "U",
            "isInteractiveMode": "true",
            "isQuestiionIndexLabelAvailable": true,

            "commonBgm": "media/sounds/bgm.mp3",
            "homeScreen": {
                "headerBackground": {
                    "color": "rgba(227,118,21,1)",
                    "image": ""
                },
                "homeBackground": {
                    "color": "#fff",
                    "image": "media/images/home/bg.png"

                },
                "playButton": {
                    "color": "#fff",
                    "image": "",
                    "xPosition": "50%",
                    "yPosition": "50%"
                },
                "help": {
                    "heading": "Help",
                    "helpButton": {
                        "color": "#fff",
                        "image": "media/images/home/btn_help.png"
                    },
                    "data": [{
                            "text": "Image pair is a game that allows you to match item(s) in one column to one or more item(s) in the other column. In some cases, the items in the first column might not have any pair in the second column.",
                            "image": "",
                            "audio": "media/sounds/help/1.mp3"
                        }

                    ]
                },
                "conceptInfo": {
                    "isAvailable": false,
                    "heading": "Concept",
                    "conceptInfoButton": {
                        "color": "#fff",
                        "image": "media/images/home/btn_conceptInfo.png"
                    },
                    "data": {
                        "text": "Animals (also called Metazoa) are multicellular eukaryotic organisms that form the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and grow from a hollow sphere of cells, the blastula, during embryonic development. Over 1.5 million living animal species have been described—of which around 1 million are insects—but it has been estimated there are over 7 million animal species in total. Animals range in length from 8.5 micrometres (0.00033 in) to 33.6 metres (110 ft). They have complex interactions with each other and their environments, forming intricate food webs. The scientific study of animals is known as zoology.",
                        "image": "media/images/home/conceptIng.jpeg",
                        "audio": "media/sounds/home/2.mp3",
                        "videoData": { "videoUrl": "data/wo1/116515.html", "posterUrl": "data/wo1/116515.jpg", "fullTitle": "Intro Video" }
                    }
                },
                "instruction": {
                    "heading": "Instructions",
                    "headingBackgroudColor": "#e1771a",
                    "boxBackgroudColor": "",
                    "instructionButton": {
                        "color": "#fff",
                        "image": "",
                        "xPosition": "200",
                        "yPosition": "300"
                    },
                    "data": [{
                            "text": "This is my first instruction",
                            "audio": "media/sounds/instruction/1.mp3"
                        },
                        {
                            "text": "This is my second instruction",
                            "audio": "media/sounds/instruction/2.mp3"
                        },
                        {
                            "text": "This is my first instruction",
                            "audio": "media/sounds/instruction/1.mp3"
                        },
                        {
                            "text": "This is my second instruction",
                            "audio": "media/sounds/instruction/2.mp3"
                        }
                    ]
                }

            },
            "scoringRules": {
                "isScoreRequired": true,
                "correctPoints": 10,
                "correctPointsWithHint": 5,
                "incorrectPoints": 0,
                "bonusPointsOnFirstAttempt": 20
            },
            "timeRules": {
                "isTimerRequired": true,
                "gameEngagementTime": 150
            }
        },
        "gameScreen": {
            "introVideo": {
                "isIntroVideoAvailable": false,
                "videoData": { "videoUrl": "data/wo1/116515.html", "posterUrl": "data/wo1/116515.jpg", "fullTitle": "Intro Video" }
            },
            "questionId": "98s7d98as89dasdy",
            "questionText": {
                "txt": "",
                "audio": "",
                "image": ""
            },
            "questionType": "image-pairing",
            "orientation": "leftDrag-rightDrop",
            "statementBackgroundColor": "rgba(227, 192, 158, 0.8)",
            "footerBackgroundColor": "rgba(227,118,21,1)",
            "isSingleQuestion": false,
            "isQuickResult": false,
            "isTrophy": true,
            "isInfoBtn": true,
            "isHintBtn": true,
            "isSkipBtn": true,
            "isResetBtn": true,
            "game_screen_config": [],

            "topicSuggestions": [
            ],
            "interactiveVideo": { "topicName": "", "topicId": "" },
            "recordedVideo": { "videoUrl": "", "posterUrl": "", "fullTitle": "" },
            "gameData": [{
                    "matrixType": "2x2",
                    "gameBackground": {
                        "color": "#fff",
                        "image": "media/images/game/bg.png"
                    },
                    "resultBackground": {
                        "color": "#fff",
                        "image": "media/images/result/bg.png"
                    },
                    "questionStatement": {
                        "txt": "Let's match up the correct combination",
                        "audio": "media/sounds/game/question1.mp3",
                        "color": "",
                        "image": ""
                    },
                    "hintElements": { "txt": "Hint 1: A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood.", "image": "data/wo1/116515.jpg", "audio": "", "videoData": { "videoUrl": "data/wo1/<crsid>.php", "posterUrl": "data/wo1/<crsid>.jpg", "fullTitle": "<topic name>" } },
                    "infoElements": { "txt": "Info 1: A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood.", "image": "data/wo1/116515.jpg", "audio": "", "videoData": { "videoUrl": "data/wo1/<crsid>.php", "posterUrl": "data/wo1/<crsid>.jpg", "fullTitle": "<topic name>" } },
                    "droppableElements": [
                        { "elementId": "drop0", "image": "media/images/game/drop1/dropEle (1).jpeg", "txt": "<label>", "isImageDroppable": true, "dropType": "squre", "indexId": "0", "hintElements": { "txt": "hint txt 0", "image": "" } },
                        { "elementId": "drop1", "image": "media/images/game/drop1/dropEle (2).jpeg", "txt": "<label>", "isImageDroppable": true, "dropType": "squre", "indexId": "1", "hintElements": { "txt": "hint txt 1", "image": "" } },
                        { "elementId": "drop2", "image": "media/images/game/drop1/dropEle (3).jpeg", "txt": "<label>", "isImageDroppable": true, "dropType": "squre", "indexId": "2", "hintElements": { "txt": "hint txt 2", "image": "" } },
                        { "elementId": "drop3", "image": "media/images/game/drop1/dropEle (4).jpeg", "txt": "<label>", "isImageDroppable": true, "dropType": "squre", "indexId": "3", "hintElements": { "txt": "hint txt 4", "image": "" } }
                    ],
                    "draggableElements": [
                        { "elementId": "drag0", "image": "media/images/game/drag1/dragEle (1).jpg", "txt": "<label>", "dragType": "squre", "indexId": "0" },
                        { "elementId": "drag1", "image": "media/images/game/drag1/dragEle (2).jpg", "txt": "<label>", "dragType": "squre", "indexId": "1" },
                        { "elementId": "drag2", "image": "media/images/game/drag1/dragEle (3).jpg", "txt": "<label>", "dragType": "squre", "indexId": "2" },
                        { "elementId": "drag3", "image": "media/images/game/drag1/dragEle (4).jpeg", "txt": "<label>", "dragType": "squre", "indexId": "3" }
                    ],
                    "correctCombination": [
                        { "draggableElementId": "drag0", "droppableElementId": ["drop0"], "isVideoAvailable": true, "videoData": { "videoUrl": "data/wo1/<crsid>.php", "posterUrl": "data/wo1/<crsid>.jpg", "fullTitle": "<topic name>" } },
                        { "draggableElementId": "drag1", "droppableElementId": ["drop1"], "isVideoAvailable": true, "videoData": { "videoUrl": "data/wo2/<crsid>.php", "posterUrl": "data/wo2/<crsid>.jpg", "fullTitle": "<topic name>" } },
                        { "draggableElementId": "drag2", "droppableElementId": ["drop2"], "isVideoAvailable": true, "videoData": { "videoUrl": "data/wo3/<crsid>.php", "posterUrl": "data/wo3/<crsid>.jpg", "fullTitle": "<topic name>" } },
                        { "draggableElementId": "drag3", "droppableElementId": ["drop3"], "isVideoAvailable": true, "videoData": { "videoUrl": "data/wo4/<crsid>.php", "posterUrl": "data/wo4/<crsid>.jpg", "fullTitle": "<topic name>" } }
                    ],
                    "slmLinks": [
                        { "topicName": "", "topicId": "" },
                        { "topicName": "", "topicId": "" },
                        { "topicName": "", "topicId": "" }
                    ]
                }
               

            ]
        }
    }
}