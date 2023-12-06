export class DatabaseMemory {
  #leads = new Map([
    [
      "823.684.590-73",
      {
        cpf: "823.684.590-73",
        name: "João da Silva",
        maritalStatus: "solteiro(a)",
        spouseName: "",
        email: "joaodasilva@hotmail.com",
        phone: "(12) 92321-4212",
      },
    ],
    [
      "235.713.720-77",
      {
        cpf: "235.713.720-77",
        name: "Márcio dos Santos",
        maritalStatus: "casado(a)",
        spouseName: "Silvana Spohr",
        email: "marciosantos@gmail.com",
        phone: "(43) 29546-4129",
      },
    ],
    [
      "034.133.430-84",
      {
        cpf: "034.133.430-84",
        name: "Patrícia Nunes Santos",
        maritalStatus: "casado(a)",
        spouseName: "Henrique Bortoleto",
        email: "pns@gmail.com",
        phone: "(66) 55555-2222",
      },
    ],
  ])

  list() {
    return Array.from(this.#leads.entries()).map((elem) => {
      const leadId = elem[0]
      const leadData = elem[1]

      return {
        leadId,
        leadData,
      }
    })
  }

  create(lead) {
    const leadId = lead.cpf

    this.#leads.set(leadId, lead)
  }

  update(id, lead) {
    this.#leads.set(id, lead)
  }

  delete(id) {
    this.#leads.delete(id)
  }
}
