Feature: Id Organisasi

    Scenario: Field id organisasi tanpa inputan
    Given Akses halaman id organisasi
    When User tidak input field id organisasi
    Then Tampil notifiksai Gagal