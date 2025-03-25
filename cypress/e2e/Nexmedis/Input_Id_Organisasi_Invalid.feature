Feature: Invalid input Id Organisasi

    Scenario: User input invalid id organisasi
    Given User akses halaman id organisasi
    When User input id organisasi tidak valid
    Then Tampil dialog Gagal