package handler

import (
	"encoding/json"
	"log"
	"net/http"
)

type respond struct {
	Text string `json:"text"`
}

// Handler will response with hello world json text
func Handler(w http.ResponseWriter, r *http.Request) {
	content := respond{Text: "Hello World"}
	text, err := json.Marshal(content)
	if err != nil {
		log.Println(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(text)
}
